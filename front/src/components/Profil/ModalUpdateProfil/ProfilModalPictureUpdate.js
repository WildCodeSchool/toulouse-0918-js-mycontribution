import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Modal, ModalHeader, ModalBody, Input, FormGroup, Col, Form
}
  from 'reactstrap';
import '../../../css/Accueil.scss';
import { ButtonForm } from '../../../data/styledComponents';
import instance from '../../../helpers/instance';

class ProfilModalPictureUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: null,
      error: null,
      picture: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props;
    console.log(userId);
    instance.get(`/api/profil/${userId}`)
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
  }

  handleChange(event) {
    const { files } = event.target;
    this.setState(() => {
      return { picture: files[0] };
    });
  }

  updatePicture(event) {
    event.preventDefault();
    const { userId } = this.props;
    const formData = new FormData();
    formData.append('picture', this.state.picture)
    fetch(`/api/profil/update/${userId}/picture`, {
      method: 'PUT',
      body: formData,
    })
      .then(res => res.json())
      .then(user => {
        this.props.updateUser(user);
        this.setState({ user });
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <div></div>
    }
    return (
      <div>
        <img
          className="rounded-circle float-right w-100"
          src={user.picture}
          alt={user.picture}
          style={{ cursor: "pointer" }}
          onClick={this.toggle}
        />
        <Modal centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader
            className="d-flex justify-content-center"
            toggle={this.toggle}
            style={{ backgroundColor: '#F5A214' }}
          >Photo{' '}<i className="fas fa-pen" />
          </ModalHeader>
          <ModalBody className="d-flex justify-content-center p-5">
            <Form
              onSubmit={this.updatePicture}
              style={{ maxWidth: '80%' }}
            >
              <Col className="text-center">
                <div className="p-1">
                  <img
                    className="w-75 rounded-circle border"
                    src={user.picture}
                    alt={user.picture}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </Col>
              <FormGroup>
                <Col>
                  <Input
                    type="file"
                    name="file"
                    id="file"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <div className="text-center">
                <ButtonForm type="submit" onClick={this.toggle}>Valider</ButtonForm>{' '}
                <ButtonForm onClick={this.toggle}>Annuler</ButtonForm>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => { return { userId: state.auth.user.id }; };

export default connect(mapStateToProps)(ProfilModalPictureUpdate);

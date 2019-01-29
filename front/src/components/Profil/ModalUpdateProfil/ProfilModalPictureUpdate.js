import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal, ModalHeader, ModalBody, Input, FormGroup, Col, Form
}
  from 'reactstrap';
import '../../../css/Accueil.scss';
import { ButtonForm } from '../../../data/styledComponents';

class ProfilModalPictureUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      error: null,
      picture: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleChange(event) {
    const { files } = event.target;
    this.setState(() => {
      return { picture: files[0] };
    });
  }

  updatePicture(event) {
    event.preventDefault();
    const {
      userId, jwt, updateUser, refreshAuthData
    } = this.props;
    const formData = new FormData();
    formData.append('picture', this.state.picture)
    fetch(`/api/profil/update/${userId}/picture`, {
      method: 'PUT',
      headers: { authorization: `Bearer ${jwt}` },
      body: formData,
    })
      .then(res => res.json())
      .then(user => {
        updateUser(user);
        refreshAuthData();
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return <div></div>
    }
    return (
      <div>
        <img
          className="rounded-circle float-right w-50"
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

const mapStateToProps = state => ({
  userId: state.auth.user && state.auth.user.id,
  jwt: state.auth.jwt
});

export default connect(mapStateToProps)(ProfilModalPictureUpdate);

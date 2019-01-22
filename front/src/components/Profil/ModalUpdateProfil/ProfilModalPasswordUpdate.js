import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Modal, ModalHeader, ModalBody, Input, FormGroup, Col, Form
}
  from 'reactstrap';
import '../../../css/Accueil.scss';
import { ButtonForm, Text } from '../../../data/styledComponents';
import instance from '../../../helpers/instance';

class ProfilModalPasswordUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: null,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
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
    const { value } = event.target;
    const key = event.target.name;
    this.setState(prevState => {
      // copy de l'objet user
      const user = { ...prevState.user, [key]: value };
      // return l'object decrivant les modifications du state
      return { user };
    });
  }

  updateSettings(event) {
    const { userId } = this.props;
    event.preventDefault();
    instance.put(`/api/profil/update/${userId}`,
      {
        password: this.state.user.password,
      })
      .then(res => res.data)
      /* .then(user => this.setState({ user })) */
      .catch(error => this.setState({ error }));
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
        <ButtonForm onClick={this.toggle}>Changer</ButtonForm>
        <Modal centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader
            className="d-flex justify-content-center"
            toggle={this.toggle}
            style={{ backgroundColor: '#F5A214' }}
          >Password{' '}<i className="fas fa-pen" />
          </ModalHeader>
          <ModalBody className="d-flex justify-content-center p-5">
            <Form
              style={{ maxWidth: '80%' }}
              onSubmit={this.updateSettings}
            >
              <FormGroup>
                <Col className="text-center">
                  <div className="p-1">
                    <img
                      className="w-75 rounded-circle border"
                      src={user.picture}
                      alt={user.picture}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <Text>{user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                    &nbsp;{user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}</Text>
                  <p>Pour continuer, veuillez confirmer votre mot de passe</p>
                  <Input
                    style={{ fontSize: '1.5em', backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }}
                    className="text-left p-4"
                    type="text"
                    name="connext"
                    id="connext"
                    onChange={this.handleChange}
                    placeholder="********"
                  />
                </Col>
              </FormGroup>
              <div className="text-center">
                <ButtonForm onClick={this.toggle}>Valider</ButtonForm>{' '}
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

export default connect(mapStateToProps)(ProfilModalPasswordUpdate);

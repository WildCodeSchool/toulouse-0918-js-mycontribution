import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row
} from 'reactstrap';
import {
  TextHeaderModal, ButtonForm, TextForm, TextSign, Line, TextAlert, LittleText
} from '../../data/styledComponents';
import axios from 'axios';

class ModalProfilEditing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      lastname: '',
      firstname: '',
      connext: '',
      skill: '',
      presentation: '',
      picture: null,
      enregistrement: '',
      errorPassword: false,
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
  }

  updateField = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  updateFieldPicture = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  render() {
    return (
      <div>
        {/* SignIn */}
        <Modal isOpen={isSignInOpen} toggle={authSignIn}>
          <ModalHeader
            style={{ backgroundColor: '#F5A214' }}
            className="d-flex justify-content-center"
          >
            <TextHeaderModal className="my-2">Se connecter <i className="fas fa-sign-in-alt mr-1 ml-1" /></TextHeaderModal>
          </ModalHeader>
          <ModalBody className="d-flex justify-content-center">
            <Form style={{ maxWidth: '80%' }}
              onSubmit={this.handleSubmitSignIn}
            >
              <FormGroup className="my-2">
                <TextForm><Label for="Email">Email</Label></TextForm>
                <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="email" name="email" id="Email" required />
              </FormGroup>
              <FormGroup className="my-2">
                <TextForm><Label for="Password">Mot de passe</Label></TextForm>
                <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="password" id="Password" required />
              </FormGroup>
              <div className="text-center">
                <ButtonForm color="primary" type="submit">Se connecter</ButtonForm>
                <TextSign onClick={authSignUp}>Je veux m'inscrire <i className="fas fa-user-plus mr-1 ml-1" /></TextSign>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div >
    );
  }
}

export default ModalProfilEditing;



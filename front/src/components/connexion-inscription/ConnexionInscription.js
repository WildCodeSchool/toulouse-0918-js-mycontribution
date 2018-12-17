import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  authSignIn, authSignUp, authSignUpClose, authSignInBack
} from '../../actions';
import {
  TextHeaderModal, ButtonForm, TextForm, TextSign, Line
} from '../../data/styledComponents';
import axios from 'axios';

class ConnexionInscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      lastname: '',
      firstname: '',
      connext: '',
      picture: '',
      skill: '',
      presentation: '',
      enregistrement: ''
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(this.state)
    axios.post("api/auth/signup", this.state)
      .then(res => this.setState({ enregistrement: res.data }))
      .catch(err => console.log(err))
    event.preventDefault()
  }

  render() {
    const {
      isSignInOpen, isSignUpOpen, authSignIn, authSignUp, authSignUpClose, authSignInBack
    } = this.props;
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
            <Form style={{ maxWidth: '80%' }}>
              <FormGroup className="my-2">
                <TextForm><Label for="Email">Email</Label></TextForm>
                <Input style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="email" name="email" id="Email" />
              </FormGroup>
              <FormGroup className="my-2">
                <TextForm><Label for="Password">Mot de passe</Label></TextForm>
                <Input style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="password" name="password" id="Password" />
              </FormGroup>
            </Form>
          </ModalBody>
          <div className="text-center">
            <ButtonForm color="primary">Se connecter</ButtonForm>
            <TextSign onClick={authSignUp}>Je veux m'inscrire <i className="fas fa-user-plus mr-1 ml-1" /></TextSign>
          </div>
        </Modal>

        {/* SignUp */}
        <Modal isOpen={isSignUpOpen} toggle={authSignUpClose}>
          {this.state.enregistrement ?
            <ModalHeader
              style={{ backgroundColor: '#F5A214' }}
              className="d-flex justify-content-center"
            >
              <TextHeaderModal className="text-center">Merci, votre inscription a bien été prise en compte !</TextHeaderModal>
            </ModalHeader>
            :
            <div><ModalHeader
              style={{ backgroundColor: '#F5A214' }}
              className="d-flex justify-content-center"
            >
              <TextHeaderModal className="my-2">S'inscrire<i className="fas fa-user-plus mr-1 ml-1" /></TextHeaderModal>
            </ModalHeader>
              <ModalBody className="d-flex justify-content-center">
                <Form style={{ maxWidth: '80%' }} onSubmit={this.handleSubmit}>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Email">Email</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="email" name="email" id="Email" />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Password">Mot de passe</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="password" name="password" id="Password" />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="PasswordConfirm">Confirmation du mot de passe</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="password" name="passwordConfirm" id="PasswordConfirm" />
                  </FormGroup>
                  <TextHeaderModal style={{ marginTop: '35px', marginBottom: '-1px' }}>À propos de vous</TextHeaderModal>
                  <Line className="mb-3" />
                  <FormGroup className="my-2">
                    <TextForm><Label for="Lastname">Nom</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="text" name="lastname" id="Lastname" />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Firstname">Prénom</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="text" name="firstname" id="Firstname" />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Connext">Lien compte Connext</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="text" name="connext" id="Connext" />
                  </FormGroup>
                  <FormGroup>
                    <TextForm><Label for="Picture">Photo de profil</Label></TextForm>
                    <Input onChange={this.updateField} className="input-file" type="file" name="picture" id="Picture" />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Skill">Compétences / Centres d'intérêts</Label></TextForm>
                    <Row style={{ marginLeft: '1px' }} className="d-flex align-items-center">
                      <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', width: '40%' }} type="text" name="skill" id="Skill" />
                      <i style={{ cursor: 'pointer' }} className="fas fa-plus mr-1 ml-1" />
                      <TextForm>Ajouter</TextForm>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <TextForm><Label for="Presentation">Présentation</Label></TextForm>
                    <Input onChange={this.updateField.bind(this)} style={{ backgroundColor: '#F0F0F0', border: 'none' }} type="textarea" name="presentation" id="Presentation" />
                  </FormGroup>
                  <div className="text-center">
                    <ButtonForm color="primary" type="submit" value="Soumettre">S'inscrire</ButtonForm>
                  </div>
                </Form>
              </ModalBody>
              <div className="text-center">
                <TextSign onClick={authSignInBack}>Je veux me connecter <i className="fas fa-sign-in-alt mr-1 ml-1" /></TextSign>
              </div></div>}
        </Modal>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  isSignInOpen: state.auth.isSignInOpen,
  isSignUpOpen: state.auth.isSignUpOpen
});

const mapDispatchToProps = {
  authSignIn, authSignUp, authSignUpClose, authSignInBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnexionInscription);

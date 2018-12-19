import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  authSignIn, authSignUp, authSignUpClose, authSignInBack
} from '../../actions';
import {
  TextHeaderModal, ButtonForm, TextForm, TextSign, Line, TextAlert, LittleText
} from '../../data/styledComponents';
import '../../css/ConnexionInscription.scss'

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
      skill: '',
      presentation: '',
      picture: null,
      enregistrement: '',
      errorPassword: false
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  updateFieldPicture = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  handleSubmit = (event) => {
    if (this.state.password === this.state.passwordConfirm) {
      event.preventDefault()
      const formData = new FormData()
      const textFields = ['email', 'password', 'lastname', 'firstname', 'connext', 'skill', 'presentation']
      textFields.forEach(field => {
        formData.append(field, this.state[field])
      })
      formData.append('picture', this.state.picture)
      fetch("api/auth/signup", {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(res => this.setState({ enregistrement: res }))
    }
    else {
      event.preventDefault()
      this.setState({ errorPassword: !this.state.errorPassword })
    }
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
                <Input style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="email" name="email" id="Email" required />
              </FormGroup>
              <FormGroup className="my-2">
                <TextForm><Label for="Password">Mot de passe</Label></TextForm>
                <Input style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="password" id="Password" required />
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
                    <TextForm><Label for="Email">Email*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="email" name="email" id="Email" required />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Password">Mot de passe*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="password" id="Password" required />
                    {this.state.errorPassword ? <TextAlert>Les mots de passe saisis ne sont pas identiques</TextAlert> : ''}
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="PasswordConfirm">Confirmation du mot de passe*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="passwordConfirm" id="PasswordConfirm" required />
                    {this.state.errorPassword ? <TextAlert>Les mots de passe saisis ne sont pas identiques</TextAlert> : ''}
                  </FormGroup>
                  <TextHeaderModal style={{ marginTop: '35px', marginBottom: '-1px' }}>À propos de vous</TextHeaderModal>
                  <Line className="mb-3" />
                  <FormGroup className="my-2">
                    <TextForm><Label for="Lastname">Nom*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="text" name="lastname" id="Lastname" required />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Firstname">Prénom*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="text" name="firstname" id="Firstname" required />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Connext">Lien compte Connext</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="text" name="connext" id="Connext" />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Picture">Photo de profil</Label></TextForm>
                    <span class="btn btn-default btn-file">
                      Choisir une image...<input onChange={this.updateFieldPicture} type="file" name="picture" id="Picture" />
                    </span>
                    {' '}{this.state.picture ? <span className="text-file">{this.state.picture.name}</span> : ''}
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Skill">Compétences / Centres d'intérêts</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="textarea" name="skill" id="Skill" />
                    <LittleText>Veuillez saisir les champs séparés par une virgule et un espace. Exemple : mécanique, impression 3D, aéromodélisme</LittleText>
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Presentation">Présentation</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="textarea" name="presentation" id="Presentation" />
                  </FormGroup>
                  <TextSign>* ces champs sont obligatoires</TextSign>
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

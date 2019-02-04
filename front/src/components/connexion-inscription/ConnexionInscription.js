import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  authSignIn, authSignUp, authSignUpClose, authSignInBack, userAuth, mdpUp, mdpDown
} from '../../actions';
import {

  TextHeaderModal, ButtonForm, TextForm, TextSign, Line, TextAlert, LittleText, Text

} from '../../data/styledComponents';
import '../../css/ConnexionInscription.scss';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import instance from '../../helpers/instance';

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
      errorPassword: false,
      errorAuth: '',
      errorEmail: '',
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

  handleSubmitSignUp = (event) => {
    if (this.state.password === this.state.passwordConfirm) {
      event.preventDefault()
      const formData = new FormData()
      const textFields = ['email', 'password', 'lastname', 'firstname', 'connext', 'skill', 'presentation']
      textFields.forEach(field => {
        formData.append(field, this.state[field])
      })
      formData.append('picture', this.state.picture)
      fetch("/api/auth/signup", {
        method: 'POST',
        body: formData
      })
        .then(res => {
          // fetch n'émet pas d'erreur même sur une 500
          if (res.ok) {
            return res.json();
          } else {
            return res.text().then(data => {
              throw new Error(data);
            })
          }
        })
        .then(res => this.setState({ enregistrement: res }))
        .catch(error => {
          alert(error);
          this.setState({ error });
        })
    }
    else {
      event.preventDefault()
      this.setState({ errorPassword: !this.state.errorPassword })
    }
  }

  handleSubmitSignIn = (event) => {
    event.preventDefault()
    axios.post("/api/auth/signin", this.state)
      .then(res => res.data)
      .then(res => {
        localStorage.setItem('token', res.token);
        Object.assign(instance.defaults, {
          headers: {
            Authorization: `Bearer ${res.token}`
          }
        });
        const decoded = jwt_decode(res.token);
        this.props.userAuth(decoded, res.token);
        this.props.authSignIn()
      })
      .catch(err => {
        this.setState({ errorAuth: 'Email ou mot de passe incorrect' })
      })
  }

  handleSubmitChangeMDP = (event) => {
    event.preventDefault()
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({ errorPassword: false })
      axios.post("/api/auth/mdp", this.state)
        .then(res => res.data)
        .then(this.props.mdpDown)
        .catch(err => {
          this.setState({ errorEmail: 'Cet email n\'existe pas' })
        })
    }
    else {
      event.preventDefault()
      this.setState({ errorPassword: !this.state.errorPassword })
    }
  }

  render() {
    const {
      isSignInOpen, isSignUpOpen, authSignIn, authSignUp, authSignUpClose, authSignInBack, isMDPOpen, mdpUp, mdpDown
    } = this.props;
    const { errorAuth, errorEmail } = this.state
    return (
      <div>
        {/* SignIn */}
        <Modal isOpen={isSignInOpen} toggle={authSignIn}>
          <ModalHeader
            style={{ backgroundColor: '#F5A214' }}
            className="d-flex justify-content-center"
          >
            <TextHeaderModal className="my-2">
              <Text>
              Se connecter <i className="fas fa-sign-in-alt mr-1 ml-1" />
                </Text>
            </TextHeaderModal>
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
                {errorAuth ? <TextForm style={{ color: 'red', fontSize: '0.7rem' }} className="mb-2">{errorAuth}</TextForm> : ''}
                <ButtonForm color="primary" type="submit">Se connecter</ButtonForm>
                {/* <TextSign onClick={mdpUp} style={{ fontSize: '0.8rem' }}>Changer de mot de passe ?</TextSign> */}
                <TextSign onClick={authSignUp}>Je veux m'inscrire <i className="fas fa-user-plus mr-1 ml-1" /></TextSign>
              </div>
            </Form>
          </ModalBody>
        </Modal>

        {/* Changer de mot de passe */}

        {/* <Modal isOpen={isMDPOpen} toggle={mdpDown}>
          <ModalHeader
            style={{ backgroundColor: '#F5A214' }}
            className="d-flex justify-content-center"
          >
            <TextHeaderModal className="my-2">Changer de mot de passe</TextHeaderModal>
          </ModalHeader>
          <ModalBody className="d-flex justify-content-center">
            <Form style={{ maxWidth: '80%' }}
              onSubmit={this.handleSubmitChangeMDP}
            >
              <FormGroup className="my-2">
                <TextForm><Label for="Email">Email</Label></TextForm>
                <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="email" name="email" id="Email" required />
                {errorEmail ? <TextForm style={{ color: 'red', fontSize: '0.7rem' }} className="mb-2">{errorEmail}</TextForm> : ''}
              </FormGroup>
              <FormGroup className="my-2">
                <TextForm><Label for="Password">Mot de passe</Label></TextForm>
                <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="password" id="Password" required />
                {this.state.errorPassword ? <TextForm style={{ color: 'red', fontSize: '0.7rem' }}>Les mots de passe saisis ne sont pas identiques</TextForm> : ''}
              </FormGroup>
              <FormGroup className="my-2">
                <TextForm><Label for="PasswordConfirm">Confirmation du mot de passe</Label></TextForm>
                <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="passwordConfirm" id="PasswordConfirm" required />
                {this.state.errorPassword ? <TextForm style={{ color: 'red', fontSize: '0.7rem' }}>Les mots de passe saisis ne sont pas identiques</TextForm> : ''}
              </FormGroup>
              <div className="text-center">
                <ButtonForm color="primary" type="submit">Enregistrer</ButtonForm>
              </div>
            </Form>
          </ModalBody>
        </Modal> */}

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
                <Form style={{ maxWidth: '80%' }} onSubmit={this.handleSubmitSignUp}>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Email">Email*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="email" name="email" id="Email" required />
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="Password">Mot de passe*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="password" id="Password" required />
                    {this.state.errorPassword ? <TextForm style={{ color: 'red', fontSize: '0.7rem' }}>Les mots de passe saisis ne sont pas identiques</TextForm> : ''}
                  </FormGroup>
                  <FormGroup className="my-2">
                    <TextForm><Label for="PasswordConfirm">Confirmation du mot de passe*</Label></TextForm>
                    <Input onChange={this.updateField} style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }} type="password" name="passwordConfirm" id="PasswordConfirm" required />
                    {this.state.errorPassword ? <TextForm style={{ color: 'red', fontSize: '0.7rem' }}>Les mots de passe saisis ne sont pas identiques</TextForm> : ''}
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
                    <span className="btn btn-default btn-file">
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
  isSignUpOpen: state.auth.isSignUpOpen,
  user: state.auth.user,
  isMDPOpen: state.auth.isMDPOpen
});

const mapDispatchToProps = {
  authSignIn, authSignUp, authSignUpClose, authSignInBack, userAuth, mdpDown, mdpUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnexionInscription);

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { authSignIn, authSignUp, authSignUpClose, authSignInBack } from '../../actions';

const ConnexionInscription = (props) => (
  <div>
    {/* SignIn */}
    <Modal isOpen={props.isSignInOpen} toggle={props.authSignIn}>
      <ModalHeader>Se connecter <i className="fas fa-sign-in-alt mr-1 ml-1" style={{ fontSize: '2em' }}></i></ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Mot de passer</Label>
            <Input type="password" name="password" id="Password" placeholder="Mot de passe" />
          </FormGroup>
        </Form>
      </ModalBody>
      <Button color="primary">Se connecter !</Button>
      <h5 onClick={props.authSignUp} style={{ cursor: 'pointer' }}>Je veux m'inscrire</h5>
    </Modal>

    {/* SignUp */}
    <Modal isOpen={props.isSignUpOpen} toggle={props.authSignUpClose}>
      <ModalHeader>S'inscrire<i className="fas fa-sign-in-alt mr-1 ml-1" style={{ fontSize: '2em' }}></i></ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Mot de passer</Label>
            <Input type="password" name="password" id="Password" placeholder="Mot de passe" />
          </FormGroup>
        </Form>
      </ModalBody>
      <Button color="primary">S'inscrire' !</Button>
      <h5 onClick={props.authSignInBack} style={{ cursor: 'pointer' }}>J'ai déjà un compte, je veux me connecter</h5>
    </Modal>
  </div>
)

const mapStateToProps = state => ({
  isSignInOpen: state.auth.isSignInOpen,
  isSignUpOpen: state.auth.isSignUpOpen
})

const mapDispatchToProps = {
  authSignIn, authSignUp, authSignUpClose, authSignInBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnexionInscription)
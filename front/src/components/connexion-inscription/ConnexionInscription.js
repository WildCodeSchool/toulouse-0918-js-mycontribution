import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { authSignIn, authSignUp, authSignUpClose, authSignInBack } from '../../actions';
import { TextHeaderModal, ButtonForm, TextForm, TextSign, Line } from '../../data/styledComponents';

const ConnexionInscription = (props) => (
  <div>
    {/* SignIn */}
    <Modal isOpen={props.isSignInOpen} toggle={props.authSignIn}>
      <ModalHeader
        style={{ backgroundColor: "#F5A214" }}
        className="d-flex justify-content-center"
      >
        <TextHeaderModal className="my-2">Se connecter <i className="fas fa-sign-in-alt mr-1 ml-1"></i></TextHeaderModal></ModalHeader>
      <ModalBody className="d-flex justify-content-center">
        <Form style={{ maxWidth: "80%" }}>
          <FormGroup className="my-2">
            <TextForm><Label for="Email">Email</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="email" name="email" id="Email" />
          </FormGroup>
          <FormGroup className="my-2">
            <TextForm><Label for="Password">Mot de passe</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="password" name="password" id="Password" />
          </FormGroup>
        </Form>
      </ModalBody>
      <div className="text-center">
        <ButtonForm color="primary">Se connecter !</ButtonForm>
        <TextSign onClick={props.authSignUp}>Je veux m'inscrire <i className="fas fa-user-plus mr-1 ml-1"></i></TextSign>
      </div>
    </Modal>

    {/* SignUp */}
    <Modal isOpen={props.isSignUpOpen} toggle={props.authSignUpClose}>
      <ModalHeader
        style={{ backgroundColor: "#F5A214" }}
        className="d-flex justify-content-center"
      >
        <TextHeaderModal className="my-2">S'inscrire<i className="fas fa-user-plus mr-1 ml-1"></i></TextHeaderModal></ModalHeader>
      <ModalBody className="d-flex justify-content-center">
        <Form style={{ maxWidth: "80%" }}>
          <FormGroup className="my-2">
            <TextForm><Label for="Email">Email</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="email" name="email" id="Email" />
          </FormGroup>
          <FormGroup className="my-2">
            <TextForm><Label for="Password">Mot de passe</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="password" name="password" id="Password" />
          </FormGroup>
          <FormGroup className="my-2">
            <TextForm><Label for="PasswordConfirm">Confirmation du mot de passe</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="password" name="password" id="PasswordConfirm" />
          </FormGroup>
          <TextHeaderModal style={{ marginTop: "35px", marginBottom: "-1px" }}>À propos de vous</TextHeaderModal>
          <Line className="mb-3"></Line>
          <FormGroup className="my-2">
            <TextForm><Label for="Lastname">Nom</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="text" name="lastname" id="Lastname" />
          </FormGroup>
          <FormGroup className="my-2">
            <TextForm><Label for="Name">Prénom</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="text" name="name" id="Name" />
          </FormGroup>
          <FormGroup className="my-2">
            <TextForm><Label for="Connext">Lien compte Connext</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="text" name="connext" id="Connext" />
          </FormGroup>
          <FormGroup>
            <TextForm><Label for="Picture">Photo de profil</Label></TextForm>
            <Input className="input-file" type="file" name="picture" id="Picture" />
          </FormGroup>
          <FormGroup className="my-2">
            <TextForm><Label for="Connext">Compétences / Centres d'intérêts</Label></TextForm>
            <Row style={{ marginLeft: "1px" }} className="d-flex align-items-center">
              <Input style={{ backgroundColor: "#F0F0F0", border: "none", width: "40%" }} type="text" name="connext" id="Connext" />
              <i style={{ cursor: "pointer" }} className="fas fa-plus mr-1 ml-1"></i>
              <TextForm>Ajouter</TextForm>
            </Row>
          </FormGroup>
          <FormGroup>
            <TextForm><Label for="Text" >Présentation</Label></TextForm>
            <Input style={{ backgroundColor: "#F0F0F0", border: "none" }} type="textarea" name="text" id="Text" />
          </FormGroup>
        </Form>
      </ModalBody>
      <div className="text-center">
        <ButtonForm color="primary">S'inscrire !</ButtonForm>
        <TextSign onClick={props.authSignInBack}>Je veux me connecter <i className="fas fa-sign-in-alt mr-1 ml-1"></i></TextSign>
      </div>
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
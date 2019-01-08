import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import {
  TextHeaderModal, ButtonForm, TextForm, TextSign, Line, TextAlert, LittleText
} from '../data/styledComponents';

class ProfilUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: '',
      password: '',
      lastname: '',
      firstname: '',
      connext: '',
      picture: null,
      modal: false
    };
    this.updateField = this.updateField.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  updateField = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  updateFieldPicture = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  handleSubmitUpdateProfil = (event) => {
    if (this.state.password === this.state.passwordConfirm) {
      event.preventDefault()
      const formData = new FormData()
      const textFields = ['email', 'password', 'lastname', 'firstname', 'connext', 'skill', 'presentation']
      textFields.forEach(field => {
        formData.append(field, this.state[field])
      })
      formData.append('picture', this.state.picture)
      fetch("api/profil/updateProfil", {
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

  //toggle modal
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const user = this.props;
    return (
      <div>
        <i style={{ fontSize: '2vh' }} onClick={this.toggle} className="fas fa-edit fa-fw mr-2 ml-2" />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <div class="container-fluid">
  <div class="row text-center">
     <div class="col-md-12">
     <img style={{width:'20%'}} className="rounded-circle" src={user.user.picture} alt={user.user.picture} />
      </div>
  </div>
</div>   
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
                <ButtonForm color="primary" type="submit">Valider</ButtonForm>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => { return { user: state.auth.user }; };

export default connect(mapStateToProps)(ProfilUpdateModal);



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

const MIN_LENGTH = 4;
const labels = {
  password: 'Nouveau mot de passe',
  confirm: 'Confirmation'
};
const getInputStyle = (props = {}) => ({
  fontSize: '1.3em',
  backgroundColor: '#F0F0F0',
  border: (!Object.keys(props).length) && '1px solid transparent',
  fontFamily: 'Continental Stag'
});
const tooShort = pass => (pass.length > 0) && (pass.length < MIN_LENGTH);

class ProfilModalPasswordUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      error: null,
      old: '',
      confirm: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const key = event.target.name;
    this.setState(prevState => {
      // return copie du state avec juste la clé-valeur à modifier
      return { ...prevState, [key]: value };
    });
  }

  updatePassword(event) {
    const { userId } = this.props;
    event.preventDefault();
    const { old, password } = this.state;
    instance.put(`/api/profil/update/${userId}/password`, { old, password })
      .then(res => res.data)
      /* .then(user => this.setState({ user })) */
      .catch(error => this.setState({ error }));
  }

  // Reactstrap permet de passer des props valid ou
  // invalid, pour mettre le champ en vert ou en rouge
  // Voir Input.propTypes dans doc Reactstrap / Form
  getInputProps(value, mismatch) {
    // Si le champ n'est pas rempli, il n'est ni valide ni invalide
    if (!value) {
      return {};
    }
    // Si le champ est rempli mais trop court, ou diff entre les deux
    if (tooShort(value) || mismatch) {
      return { invalid: true };
    }
    // `Minimum de ${MIN_LENGTH} caractères requis`
    return { valid: true };
  }

  getInputFieldsProps() {
    const { password, confirm } = this.state;
    // check si les deux sont des chaînes non vides
    const bothFilled = (password.length > 0) && (confirm.length > 0);
    const identical = password === confirm;
    const mismatch = bothFilled && !identical;
    const passwordProps = this.getInputProps(password, mismatch);
    const confirmProps = this.getInputProps(confirm, mismatch);

    // calcule une erreur à afficher en priorité
    let error;
    if (mismatch) {
      error = 'Les deux champs ne correspondent pas';
    } else if (tooShort(password) || tooShort(confirm)) {
      error = `Minimum de ${MIN_LENGTH} caractères requis`;
    }
    // renvoie les ensembles de props dans un tableau
    return {
      error,
      password: passwordProps,
      confirm: confirmProps
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { user } = this.props;
    const {
      error, ...fieldsProps
    } = this.getInputFieldsProps();
    if (!user) {
      return <div></div>
    }
    return (
      <div className="my-1 text-right">
        <ButtonForm noMargin onClick={this.toggle}>Changer</ButtonForm>
        <Modal centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader
            className="d-flex justify-content-center"
            toggle={this.toggle}
            style={{ backgroundColor: '#F5A214' }}
          >Mot de passe{' '}<i className="fas fa-pen" />
          </ModalHeader>
          <ModalBody className="d-flex justify-content-center p-5">
            <Form
              style={{ maxWidth: '80%' }}
              onSubmit={this.updatePassword}
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
                    <Input
                      type="password"
                      name="old"
                      style={getInputStyle()}
                      className="text-left p-2 mb-2"
                      onChange={this.handleChange}
                      placeholder="Ancien mot de passe"
                      value={this.state.old}
                    />
                    {
                      ['password', 'confirm'].map(name => {
                        // Récupère ce qu'a renvoyé getInputFieldsProps pour
                        // ce champ. L'objet a les clés vide (neutre), valid (ok)
                        // ou invalid + éventuellement tooShort. On destructure juste
                        // tooShort car ce n'est pas une prop accepté par Input
                        const inputProps = fieldsProps[name];
                        return (
                          <Input
                            {...inputProps}
                            type="password"
                            key={name}
                            name={name}
                            style={getInputStyle(inputProps)}
                            className="text-left p-2 mb-2"
                            onChange={this.handleChange}
                            placeholder={labels[name]}
                            value={this.state[name]}
                          />
                        );
                      })
                    }
                  <div style={{minHeight: 20}} className={ error ? 'invalid-feedback' : 'invisible' }>
                    {error}
                  </div>
                </Col>
              </FormGroup>
              <div className="text-center">
                <ButtonForm onClick={this.toggle} disabled={!!error}>Valider</ButtonForm>{' '}
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

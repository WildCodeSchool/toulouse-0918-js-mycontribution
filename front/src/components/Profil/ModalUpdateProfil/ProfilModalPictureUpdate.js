import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Modal, ModalHeader, ModalBody, Input, FormGroup, Col, Form
}
  from 'reactstrap';
import '../../../css/Accueil.scss';
import { ButtonForm } from '../../../data/styledComponents';

class ProfilModalConnextUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: null,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props;
    console.log(userId);
    axios.get(`/api/profil/${userId}`)
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
        <i
          style={{ cursor: "pointer" }}
          onClick={this.toggle}
          className="fas fa-chevron-right"
        />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader
            className="d-flex justify-content-center"
            toggle={this.toggle}
            style={{ backgroundColor: '#F5A214' }}
          >Photo
          </ModalHeader>
          <ModalBody className="d-flex justify-content-center p-5">
            <Form style={{ maxWidth: '80%' }}>
              <FormGroup>
                <Col>
                  <Input
                    style={{ backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }}
                    className="text-left p-2"
                    type="text"
                    name="connext"
                    id="connext"
                    onChange={this.handleChange}
                    value={user.connext}
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

export default connect(mapStateToProps)(ProfilModalConnextUpdate);

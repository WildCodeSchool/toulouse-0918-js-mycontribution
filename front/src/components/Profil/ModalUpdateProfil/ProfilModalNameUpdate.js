import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal, ModalHeader, ModalBody, Input, FormGroup, Col, Form
}
  from 'reactstrap';
import '../../../css/Accueil.scss';
import { ButtonForm } from '../../../data/styledComponents';

class ProfilModalNameUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { user, handleChange, updateSettings } = this.props;
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
          >Nom{' '}<i className="fas fa-pen" />
          </ModalHeader>
          <ModalBody className="d-flex justify-content-center">
            <Form
              style={{ maxWidth: '80%' }}
              onSubmit={updateSettings}
            >
              <FormGroup>
                <Col>
                  <Input
                    style={{ fontSize: '1.3em', backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }}
                    className="text-left p-2"
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={handleChange}
                    value={user.firstname}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col>
                  <Input
                    style={{ fontSize: '1.3em', backgroundColor: '#F0F0F0', border: 'none', fontFamily: 'Continental Stag' }}
                    className="text-left p-2"
                    type="text"
                    name="lastname"
                    id="lastname"
                    onChange={handleChange}
                    value={user.lastname}
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

export default connect(mapStateToProps)(ProfilModalNameUpdate);

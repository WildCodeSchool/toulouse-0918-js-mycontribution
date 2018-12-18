import React, { Component } from 'react';
import '../css/ProjectForm.scss';
import ProjectForm from '../components/Formulaires/ProjectForm';

class FormProjectContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="formulaire">
        <ProjectForm />
      </div>
    );
  }
}

export default FormProjectContainer;
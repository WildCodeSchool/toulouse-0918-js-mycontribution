import React, { Component } from 'react';
import ProjectForm from '../components/Formulaires/ProjectForm';

class FormProjectContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ProjectForm />
      </div>
    );
  }
}

export default FormProjectContainer;
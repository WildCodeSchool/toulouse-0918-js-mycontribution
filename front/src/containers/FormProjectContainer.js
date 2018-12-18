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
    const projectType = this.props.match.url.substr(7)
    return (
      <div id="formulaire">
        <ProjectForm projectType={projectType} />
      </div>
    );
  }
}

export default FormProjectContainer;
import React, { Component } from 'react';
import '../css/ProjectForm.scss';
import ProjectForm from '../components/Formulaires/ProjectForm';
import axios from 'axios';
class FormProjectContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: '',
      name: '',
      summary: '',
      description: '',
      skills: [],
      contact: '',
      team: '',
      price: '',
      sponsors: '',
      events: 0,
      eventDate: '',
      eventHour: '',
      eventPlace: '',
      eventName: '',
      eventDesc: ''
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const projectType = this.props.match.url.substr(7)
    axios.post(`/api/project/${projectType}`, JSON.stringify(this.state))
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    const projectType = this.props.match.url.substr(7)
    return (
      <div id="formulaire">
        <ProjectForm 
          projectType={projectType} 
          onChange={this.onChange}
          submitForm={this.submitForm} />
      </div>
    );
  }
}

export default FormProjectContainer;
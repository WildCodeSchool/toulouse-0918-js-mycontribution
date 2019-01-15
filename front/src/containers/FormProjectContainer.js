import React, { Component } from 'react';
import '../css/ProjectForm.scss';
import ProjectForm from '../components/Formulaires/ProjectForm';
import ConfirmForm from '../components/Formulaires/ConfirmForm';
import axios from 'axios';
import { connect } from 'react-redux';
import { formNewProject, formChangeField, formChangeEventField, formAddEvent } from '../actions'

class FormProjectContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: '',
      validation: ''
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
  }

  componentDidMount() {
    const projectType = this.props.match.url.substr(7);
    this.props.formNewProject(projectType)
  }

  onChange(e) {
    const { name, value } = e.target;
    this.props.formChangeField(name, value)
  }

  onChangeEvent(index) {
    return (e) => {
      const { name, value } = e.target;
      this.props.formChangeEventField(name, value, index)
    }
  }

  onChangeFile(e) {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }

  addEvent(index) {
    return (e) => {
      this.props.formAddEvent(index)
    }
  }

  submitForm(e) {
    e.preventDefault();
    const projectType = this.props.match.url.substr(7)
    const { project, userId } = this.props;
    project.userId = userId;

    const formData = new FormData();
    const textFields = ['name', 'summary', 'description', 'skills', 'contact', 'team', 'prizes', 'sponsors', 'projectType', 'userId', 'startDate', 'endDate']
    textFields.forEach(field => {
      formData.append(field, this.props.project[field])
    })
    project.events.forEach((event, index) => {
      Object.keys(event).forEach(key => {
        formData.append(`events[${index}][${key}]`, event[key])
      })
    })
    formData.append('logo', this.state.logo)

    const self = this;
    axios.post(`/api/project/${projectType}`, formData)
      .then(function (res) {
        console.log(res);
        self.setState({validation: res.data.insertId})
      })
      .catch(function (err) {console.log(err);});
  }

  render() {
    const projectType = this.props.match.url.substr(7)
    return (
      <div id="formulaire">
      {
        this.state.validation === ''
        ? this.props.project &&
          <ProjectForm 
            projectType={projectType} 
            onChange={this.onChange}
            onChangeEvent={this.onChangeEvent}
            onChangeFile={this.onChangeFile}
            addEvent={this.addEvent}
            submitForm={this.submitForm} 
            project={this.props.project}
          />
        : <ConfirmForm projectType={projectType} id={this.state.validation} />
      }
     
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.createForm,
  userId: state.auth.user && state.auth.user.id
})

const mapDispatchToProps = {
  formNewProject,
  formChangeField,
  formChangeEventField,
  formAddEvent
}
export default connect(mapStateToProps, mapDispatchToProps)(FormProjectContainer);
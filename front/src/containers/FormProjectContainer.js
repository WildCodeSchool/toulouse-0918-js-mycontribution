import React, { Component } from 'react';
import '../css/ProjectForm.scss';
import ProjectForm from '../components/Formulaires/ProjectForm';
import axios from 'axios';
import { connect } from 'react-redux';
import { formNewProject, formChangeField, formChangeEventField, formAddEvent } from '../actions'

const newEvent = {
      eventDate: '',
      eventHour: '',
      eventPlace: '',
      eventName: '',
      eventDesc: ''
}
class FormProjectContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: '',
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
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
    axios.post(`/api/project/${projectType}`, project)
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
      {
        this.props.project &&
          <ProjectForm 
            projectType={projectType} 
            onChange={this.onChange}
            onChangeEvent={this.onChangeEvent}
            addEvent={this.addEvent}
            submitForm={this.submitForm} 
            project={this.props.project}
          />
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
import React, { Component } from 'react';
import '../css/ProjectForm.scss';
import ProjectForm from '../components/Formulaires/ProjectForm';
import axios from 'axios';
import { connect } from 'react-redux';
import { formNewProject, formChangeField, formChangeEventField } from '../actions'

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
      name: '',
      summary: '',
      description: '',
      skills: [],
      contact: '',
      team: '',
      price: '',
      sponsors: '',
      events: [{...newEvent}],
      eventDate: '',
      eventHour: '',
      eventPlace: '',
      eventName: '',
      eventDesc: ''
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
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

  onChangePicture (e) {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
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
      {
        this.props.project &&
          <ProjectForm 
            projectType={projectType} 
            onChange={this.onChange}
            onChangeEvent={this.onChangeEvent}
            submitForm={this.submitForm} 
            project={this.props.project}
          />
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.createForm
})

const mapDispatchToProps = {
  formNewProject,
  formChangeField,
  formChangeEventField
}
export default connect(mapStateToProps, mapDispatchToProps)(FormProjectContainer);
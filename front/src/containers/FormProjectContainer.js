import React, { Component } from 'react';
import '../css/ProjectForm.scss';
import ProjectForm from '../components/Formulaires/ProjectForm';
import ConfirmForm from '../components/Formulaires/ConfirmForm';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  formNewProject,
  formEditProject,
  formChangeField,
  formChangeEventField,
  formAddEvent
} from '../actions'
import instance from '../helpers/instance';

const formatDates = project => ({
  ...project,
  startDate: project.startDate.substr(0, 10),
  endDate: project.endDate.substr(0, 10)
})

class FormProjectContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      picture: '',
      validation: ''
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.fetchAndEditProject = this.fetchAndEditProject.bind(this);
  }

  componentDidMount() {
    this.setup();
  }

  setup() {
    // Contient projectType: 'initiative' ou mission
    // et l'id du projet si c'est une modification
    const { params } = this.props.match;
    const { projectType, id } = params;

    if (!id) {
      // Si id absent, on initialise un nouveau projet
      // via un dispatch d'action Redux
      this.props.formNewProject(projectType);
    } else {
      // Sinon on fetch le projet sur le back puis l'édite
      this.fetchAndEditProject(projectType, id);
    }

  }

  // Gérer le cas où on reste sur la même page mais où
  // on doit "réinitialiser" le formulaire, deux cas possibles
  // 1. switch entre créer initiative et créer mission
  // 2. switch de modification d'un existant et créer
  componentDidUpdate(prevProps) {
    const prevUrl = prevProps.match.url;
    const { url } = this.props.match;
    if (url !== prevUrl) {
      this.setup();
    }
  }

  fetchAndEditProject(projectType, id) {
    const { formEditProject } = this.props;
    // Envoie deux requêtes simultanées pour obtenir le projet + ses events
    Promise.all([
      instance.get(`/api/project/${projectType}/${id}`).then(r => r.data),
      instance.get(`/api/event?projectId=${id}`).then(r => r.data)
    ])
      // On récupère les données selon l'ordre dans lequel on a mis les appels,
      // ici le projet en 1er, les events en 2nd, et on ajoute les events au projet
      // Object.assign est l'"ancêtre" du spread operator.
      // On reformate startDate et endDate, car on ne veut que la partie date mais
      // la db nous a renvoyé une date formatée avec le temps
      .then(([project, events]) => (
        Object.assign(formatDates(project), { events })
      ))
      .then(project => formEditProject(project));
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

  addEvent() {
    this.props.formAddEvent();
  }

  submitForm(e) {
    e.preventDefault();
    const { match, history, project, userId } = this.props;
    const { projectType, id } = match.params;
    const { picture } = this.state;
    project.userId = userId;

    const formData = new FormData();
    const textFields = ['name', 'summary', 'description', 'skills', 'contact', 'team', 'prizes', 'sponsors', 'projectType', 'userId', 'startDate', 'endDate']
    textFields.forEach(field => {
      formData.append(field, project[field])
    })
    project.events.forEach((event, index) => {
      Object.keys(event).forEach(key => {
        formData.append(`events[${index}][${key}]`, event[key])
      })
    })
    if (picture) {
      formData.append('picture', picture)
    }

    const promise = id ?
      instance.put(`/api/project/${projectType}/${id}`, formData)
      : instance.post(`/api/project/${projectType}`, formData);
    const urlSuffix = id ? '?updated=true' : '';

    promise
        .then(res => res.data)
        .then(project => history.push(
          `/confirmation/${projectType}/${project.id}${urlSuffix}`
        ))
        .catch(function (err) {
      });
  }

  render() {
    const { projectType, id } = this.props.match.params;
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
            actionVerb={id ? 'Modifier' : 'Créer'}
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
  formEditProject,
  formChangeField,
  formChangeEventField,
  formAddEvent
}
export default connect(mapStateToProps, mapDispatchToProps)(FormProjectContainer);
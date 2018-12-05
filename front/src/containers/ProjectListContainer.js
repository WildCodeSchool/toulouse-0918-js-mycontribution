import React, { Component } from 'react';
import ProjectList from '../components/ProjectList'
import axios from 'axios';


class ProjectListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      projects : []
    }
  }

componentDidMount() {
  this.fetchInitiatives();
}

fetchInitiatives() {
  axios.get('/api/initiatives')
    .then(res => res.data)
    .then(projects =>  this.setState({ projects }))
    .catch(error => this.setState({ error }))
}

  render() {
    const { error, projects} = this.state;
    return (
      <div>
        <ProjectList projects={projects} />
        
      {/* {
        error 
          ? <div> {error.message} </div>
          : <ProjectList projects={projects} />
      } */}
      </div>

    );
  }
}

export default ProjectListContainer;
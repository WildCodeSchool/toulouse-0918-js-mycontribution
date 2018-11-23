import React, { Component } from 'react';
import ProjectListContainer from './containers/ProjectListContainer';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <ProjectListContainer />
      </div>
    );
  }
}

export default App;

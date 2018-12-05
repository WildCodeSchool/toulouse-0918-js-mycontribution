import React, { Component } from 'react';
import MissionsList from '../components/Missions/MissionsList'
import axios from 'axios';


class MissionsListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      missions : []
    }
  }

// componentDidMount() {
//   this.fetchMissions();
// }

// fetchInitiatives() {
//   axios.get('/api/missions')
//     .then(res => res.data)
//     .then(missions =>  this.setState({ missions }))
//     .catch(error => this.setState({ error }))
// }

  render() {
    const { error, missions} = this.state;
    return (
      <div>
        <MissionsList missions={missions} />
        
      {/* {
        error 
          ? <div> {error.message} </div>
          : <MissionsList missions={mission} />
      } */}
      </div>

    );
  }
}

export default MissionsListContainer;
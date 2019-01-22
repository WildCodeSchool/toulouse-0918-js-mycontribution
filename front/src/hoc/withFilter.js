import React, { Component } from 'react';
import axios from 'axios';

const withFilter = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputSearch: '',
        id: [0]
      }
  
      this.handleSearch = this.handleSearch.bind(this);
      this.searchId = this.searchId.bind(this);
      this.nameFilter = this.nameFilter.bind(this);
    }


    handleSearch(e) {
      let inputSearch = e.target.value;
      let { id } = this.state;
      if (inputSearch === '') id = [0];
      this.setState({ inputSearch, id });
    }

    searchId() {
      const { projects } = this.props;
      const {users} = this.props;
      const {events} = this.props;
      console.log(projects);
      const { inputSearch } = this.state;
      let id = [];

      // regex recherche toutes occurences contenant inputSearch
      let regex = new RegExp("\\w*" + inputSearch + "\\w*", "gi");

      // recherche sur table event dans tous les champs
      events && events.map(item => {
        let allfield = Object.values(item).join(' ');
        // console.log('allfield',allfield);
        if (regex.test(allfield)) {
          id = [...id, item.id];
          console.log('id', id);
        }
      })
      // recherche sur table user dans tous les champs
      users && users.forEach(item => {
        let allfield = Object.values(item).join(' ');
        // console.log('allfield',allfield);
        if (regex.test(allfield)) {
          id = [...id, item.id];
          console.log('id', id);
        }
      })
      // recherche dans project sur tous les champs
      projects && projects.map(item => {
        let allfield = Object.values(item).join(' ');
        console.log('allfield',allfield);
        if (regex.test(allfield)) {
          id = [...id, item.id];
          console.log('id', id);
        }
      })
      if (id.length === 0) id = [-1];
      console.log('id', id);
      this.setState({ id });
    }

    nameFilter(e) {
      const { users } = this.props;
      const { inputSearch } = this.state;
      let id = '';
      // si champ de recherche pas vide
      if (inputSearch !== '') {
        // si champs chargés dans redux, je cherche l'id
        if (users.length > 0) {
          id = this.searchId();
        } else {
          //je charge les users
          this.props.usersFetchRequest();
          axios.get('/api/users')
            .then(res => res.data)
            .then(users => {
              this.props.usersFetchSuccess(users);
            })
            .then(users => id = this.searchId())
            .catch(error => this.props.usersFetchError(error))
        }
        // console.log(id);
      }
    }
    render() {
      return (
        <WrappedComponent nameFilter={this.nameFilter} searchId={this.searchId} handleSearch={this.handleSearch} {...this.props} id={this.state.id} />
      )
    }
  }
}

export default withFilter;
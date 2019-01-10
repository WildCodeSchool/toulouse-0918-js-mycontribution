import React, { Component } from 'react';
import { usersFetchRequest, usersFetchSuccess, usersFetchError } from '../actions';
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
      const { users, project } = this.props;
      const { inputSearch } = this.state;
      let id = [];
      // regex pour une partie du nom seulement ou email
      let regex = new RegExp("\\w*" + inputSearch + "\\w*", "gi");
      // console.log(regex.exec(users[i].firstname));
      for (let i = 0; i < users.length; i++) {
        if (regex.test(users[i].firstname) || regex.test(users[i].email)) {
          id = [...id, users[i].id];
          break;
        }
      }
      // recherche dans project sur name, summuary, description, sponsor et wanted skill
      project.map(item => {
        let allfield = Object.values(item).join(' ');
        // console.log('allfield',allfield);
        if (regex.test(allfield)) {
          id = [...id, item.userId];
          console.log('id', id);
        }
      })
      console.log('id', id);
      if (id.length === 0) id = [-1];
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
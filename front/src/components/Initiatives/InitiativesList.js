import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import InitiativeItem from './InitiativeItem';
import { usersFetchRequest, usersFetchSuccess, usersFetchError } from '../../actions';

import axios from 'axios';

class InitiativesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: '',
      id: [0]
    }
    this.nameFilter = this.nameFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchId = this.searchId.bind(this);
  }

  handleSearch(e) {
    let inputSearch = e.target.value;
    let { id } = this.state;
    if (inputSearch === '') id = [0];
    this.setState({ inputSearch, id });
  }

  searchId() {
    const { users, initiative } = this.props;
    const { inputSearch } = this.state;
    let id = [];
    // regex pour une partie du nom seulement ou email
    let regex = new RegExp("\\w*"+inputSearch+"\\w*", "gi");
    // console.log(regex.exec(users[i].firstname));
    for (let i = 0; i < users.length; i++) {
      if (regex.test(users[i].firstname)||regex.test(users[i].email)) {
        id = [...id,users[i].id];
        break;
      }
    }
    // recherche dans project sur name, summuary, description, sponsor et wanted skill
    initiative.map(item => {
      let allfield = Object.values(item).join(' ');
      console.log('allfield',allfield);
      if (regex.test(allfield)) {
        id = [...id,item.userId];
        console.log('id',id);
    }
  })
    console.log('id',id);
    if(id.length===0) id=[-1];
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
    const { projects } = this.props;
    return (
      <div>
        <StyledContainer style={{ marginTop: "10%" }}>
          <Container>
            <Row className="d-flex justify-content-end">
              <Text>
                <span>
                  <i className="fas fa-search fa-fw mr-2"></i>
                  <input className="mr-2" type="text" name="inputSearch" id="inputSearch" placeholder="nom" onChange={this.handleSearch} />
                  <button type="button" className="btn btn-light" name="buttonSearch" id="buttonSearch" onClick={this.nameFilter}>Rechercher</button>
                </span>
              </Text>
            </Row>
            <Row>
              <Col>
                <Subtitle>
                  <span>
                    <i className="fas fa-lightbulb fa-fw mr-2"></i>
                    Toutes les initiatives
              </span>

                </Subtitle>
                <Line />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                {
                  projects.filter(elt => {
                    let { id } = this.state;
                    // console.log(id,elt.userId);
                    if (id[0] === 0) {
                      return true;
                    } else {
                      for(let i=0;i<id.length;i++){
                        if (elt.userId === id[i]) {
                          return true;
                        } 
                      }
                        return false;
                    }
                  }).map((initiative, index) =>
                    <InitiativeItem
                      key={index}
                      {...initiative}
                    />
                  )
                }
              </Col>
            </Row>
          </Container>
        </StyledContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
  initiative: state.project.initiative
});

const mapDispatchToProps = {
  usersFetchRequest, usersFetchSuccess, usersFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(InitiativesList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents'
import { Container, Row, Col } from 'reactstrap';
import InitiativeItem from './InitiativeItem';
import withFilter from '../../hoc/withFilter';
import { usersFetchRequest, usersFetchSuccess, usersFetchError } from '../../actions';

import axios from 'axios';

class InitiativesList extends Component {

  render() {
    const { projects } = this.props;
    return (
      <div>
        <StyledContainer style={{ marginTop: "10%" }}>
          <Container>
            <Row className="d-flex justify-content-end">
              <Text className="mb-5">
                <span>
                  <i className="fas fa-search fa-fw mr-2"></i>
                  <input className="mr-2" type="text" name="inputSearch" id="inputSearch" placeholder="Rechercher..." onChange={this.props.handleSearch} />
                  <button type="button" className="btn btn-light" name="buttonSearch" id="buttonSearch" onClick={this.props.nameFilter}>Rechercher</button>
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
                    let { id } = this.props;
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
  project: state.project.initiative
});

const mapDispatchToProps = {
  usersFetchRequest, usersFetchSuccess, usersFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(withFilter(InitiativesList));


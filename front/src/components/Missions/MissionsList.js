import React from 'react';
import '../../css/lists.scss';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents'
import MissionItem from './MissionItem';
import withFilter from '../../hoc/withFilter';
import { usersFetchRequest, usersFetchSuccess, usersFetchError } from '../../actions';
import { connect } from 'react-redux';

const MissionsList = ({ projects, handleSearch, nameFilter, id }) => (
  <StyledContainer className="lists">
    <Container>
      <Row className="d-flex justify-content-end">
        <Text className="mb-5">
          <span>
            <i className="fas fa-search fa-fw mr-2"></i>
            <input className="mr-2" type="text" name="inputSearch" id="inputSearch" placeholder="Rechercher..." onChange={handleSearch} />
            <button type="button" className="btn btn-secondary" name="buttonSearch" id="buttonSearch" onClick={nameFilter}>Rechercher</button>
          </span>
        </Text>
      </Row>
      <Row>
        <Col>
          <Subtitle>
            <i className="fas fa-rocket fa-fw mr-2" />
            Toutes les missions
          </Subtitle>
          <Line />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {
            projects.filter(elt => {
              // let { id } = this.props;
              if (id[0] === 0) {
                return true;
              } else {
                for (let i = 0; i < id.length; i++) {
                  if (elt.userId === id[i]) {
                    return true;
                  }
                }
                return false;
              }
            })
            .map((mission, index) =>
              <MissionItem
            key={index}
            {...mission}
          />
          )
        }
        </Col>
      </Row>
    </Container>
  </StyledContainer>
);

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
  project: state.project.mission
});

const mapDispatchToProps = {
  usersFetchRequest, usersFetchSuccess, usersFetchError
};

export default connect(mapStateToProps, mapDispatchToProps)(withFilter(MissionsList));

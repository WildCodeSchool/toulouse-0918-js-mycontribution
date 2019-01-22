import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { StyledContainer, Line, Subtitle, Text } from '../../data/styledComponents';
import EvenementItem from './EvenementItem';
import withFilter from '../../hoc/withFilter';
import '../../css/evenementsList.scss';

const EvenementsList = ({ events, searchId, handleSearch, id }) => (
  <StyledContainer className="evenement-list">
    <Container>
      <Row className="d-flex justify-content-end">
        <Text className="mb-5">
          <span>
            <i className="fas fa-search fa-fw mr-2"></i>
            <input className="mr-2" type="text" name="inputSearch" id="inputSearch" placeholder="Rechercher..." onChange={handleSearch} />
            <button type="button" className="btn btn-warning" name="buttonSearch" id="buttonSearch" onClick={searchId}>Rechercher</button>
          </span>
        </Text>
      </Row>
        <Row>
          <Col>
            <Subtitle>
              <i className="fas fa-calendar-alt fa-fw mr-2" />
              Prochains évènements
          </Subtitle>
            <Line />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            {
              events.filter(elt => {
                if (id[0] === 0) {
                  return true;
                } else {
                  for(let i=0;i<id.length;i++){
                    if (elt.id === id[i]) {
                      return true;
                    } 
                  }
                    return false;
                }
              }).map((event, index) => (
                <EvenementItem
                  key={index}
                  {...event}
                />
              ))
            }
          </Col>
        </Row>
    </Container>
  </StyledContainer>
    );
    
const mapStateToProps = state => ({
      events: state.events.events,
    loading: state.events.loading,
    error: state.events.error
  });
  
  export default connect(
    mapStateToProps
  )(withFilter(EvenementsList));

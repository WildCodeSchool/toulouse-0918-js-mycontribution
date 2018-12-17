import React, { Component } from 'react';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents'
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import ContributeurItem from './ContributeurItem';

class ContributeursList extends Component {
  render() {
    const { users } = this.props;
    console.log(users)
    return (
      <StyledContainer style={{ marginTop: "10%" }}>
        <Container>
          <Row>
            <Col>
              <Subtitle>
                <i className="fas fa-users fa-fw mr-2"></i>
                Tous les contributeurs
              </Subtitle>
              <Line />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              {
                users.users.map(user =>
                  <ContributeurItem
                    {...user}
                  />
               )}
            </Col>
          </Row>
        </Container>
      </StyledContainer>
    )
  };
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};


export default connect(
  mapStateToProps
)(ContributeursList);
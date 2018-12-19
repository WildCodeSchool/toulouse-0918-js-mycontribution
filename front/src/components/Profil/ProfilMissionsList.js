import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { StyledContainer, Line, Subtitle } from '../../data/styledComponents';
import MissionItem from '../Missions/MissionItem';

/* const ProfilMissionList = ({ projects }) => (
 */
class ProfilMissionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  
  render() {
    const { projects } = this.props;
    return (
      <StyledContainer className="mt-5">
        <Container>
          <Row className="text-center d-flex justify-content-around mb-5">
            <div>
              <Link className="" to="/profil/9/favorite"><i className="fas fa-heart" style={{ color: 'black', fontSize: '8vh' }} />
              </Link>
            </div>
            <div>
              <Link className="" to="/profil/9/initiative"><i className="fas fa-lightbulb" style={{ color: 'black', fontSize: '8vh' }} />
              </Link>
            </div>
            <div className="text-center">
              <Link className="" to="/profil/9/mission"><i className="fas fa-rocket" style={{ color: 'black', fontSize: '8vh' }} />
              </Link>
            </div>
          </Row>
        </Container>
        <Row>
          <Col>
            <Subtitle><i className="fas fa-lightbulb fa-fw mr-2" />Mes missions</Subtitle>
            <Line />
          </Col>
        </Row>
        <Row>
          <Col>
            {
              projects && projects.map((mission, index) => <MissionItem key={index} {...mission} />)
            }
          </Col>
        </Row>
      </StyledContainer>
    );
  }
}
export default ProfilMissionList;

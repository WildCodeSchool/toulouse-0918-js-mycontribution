import React, { Component } from 'react'
import '../../css/initiativeItem.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Text, SubtitleLink, InitiativeCard, MiddleText } from '../../data/styledComponents';
import InitiativeReward from './InitiativeReward';

class InitiativeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  description = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {
      id, logo, name, projectType, sponsors, prizes, description, startDate, endDate
    } = this.props;
    const { isOpen } = this.state;
    return (
      <InitiativeCard className="mb-3" id="initiative-item">
        <Container>
            <Row>
              <Text className="mr-4">
                <i className="fas fa-calendar-alt fa-fw icons" />
                {
                  moment(startDate).subtract(10, 'days').calendar()
                }
              </Text>
              <Text>
                <i className="fas fa-calendar-alt fa-fw icons" />
                {
                  moment(endDate).subtract(10, 'days').calendar()
                }
              </Text>
            </Row>
          <Row className="my-2">
            <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
              <img src={logo} className="rounded img-fluid" alt={`img-${name}`} />
            </Col>

            <Col className="mt-3">
              <Container fluid>
                <Row>
                  <Col className="p-0">
                    <Link to={`/${projectType}/${id}`}>
                      <SubtitleLink>{name}</SubtitleLink>
                    </Link>

                  </Col>
                </Row>
                <Row>
                  <Col className="p-0">
                    <Text onClick={this.description} style={{ marginBottom: '0rem', cursor: 'pointer' }}>
                      Description <i
                        className="fas fa-sort-down fa-fw ml-1"
                      />
                      <p>{
                        isOpen
                          ? <MiddleText>{description}</MiddleText>
                          : ''
                      }</p>
                    </Text>
                  </Col>
                </Row>
              </Container>
            </Col>

            {
              (prizes !== '' || sponsors !== '')
              && <InitiativeReward sponsors={sponsors} prizes={prizes} />

            }

            <Col xs="12" lg="2" className="icon d-flex align-items-center justify-content-end mr-3">
              <i className="far fa-heart fa-3x fa-fw" ></i>
            </Col>
          </Row>
        </Container>
      </InitiativeCard>
    )
  }
}

export default InitiativeItem;
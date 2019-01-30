import React, { Component } from 'react'
import '../../css/initiativeItem.scss';
import { Link } from 'react-router-dom';
import { TextHeavy, Text, SubtitleLink, InitiativeCard } from '../../data/styledComponents';
import { Container, Row, Col } from 'reactstrap';
import InitiativeReward from './InitiativeReward';
import formatText from '../../helpers/formatText';
import formatDate from '../../helpers/formatDate';
import instance from '../../helpers/instance';

const getClass = isFavorite => isFavorite
  ? "far fa-heart fa-3x fa-fw text-warning"
  : "far fa-heart fa-3x fa-fw";

class InitiativeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite() {
    const { authSignIn, toggleFavoriteProject, user, id } = this.props;
    if (!user) {
      authSignIn();
    } else {
      instance.put(`/api/profil/${id}/favorite`)
        .then(res => res.data)
        .then(() => toggleFavoriteProject(id));
    }
  }

  description = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {
      id, logo, name, summary, projectType, sponsors, prizes, description, startDate, endDate, isFavorite
    } = this.props;
    const { isOpen } = this.state;
    return (
      <InitiativeCard className="mb-3" id="initiative-item">
        <Container>
          <Row>
            <Col xs="12" lg="2" className="d-flex align-items-center justify-content-center">
              <img src={logo} className="rounded img-fluid" alt={`img-${name}`} />
            </Col>

            <Col className="mt-3">
              <Container fluid>
                <Row>
                  <Text className="mr-4">
                    <i className="fas fa-calendar-alt fa-fw icons" />
                    {
                      formatDate(startDate)
                    }
                  </Text>
                  <Text>
                    <i className="fas fa-calendar-alt fa-fw icons" />
                    {
                      formatDate(endDate)
                    }
                  </Text>
                </Row>
                <Row className="my-2">
                  <Col className="p-0">
                      <Link to={`/${projectType}/${id}`}>
                        <SubtitleLink>{name}</SubtitleLink>
                      </Link>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col className="p-0">
                    {summary}
                  </Col>
                </Row>
                <Row>
                  <Col className="p-0">
                      <TextHeavy onClick={this.description} style={{ marginBottom: '0rem', cursor: 'pointer' }}>
                        Description 
                        <i
                          className="fas fa-sort-down fa-fw ml-1"
                        />
                      </TextHeavy>
                        {
                          isOpen && formatText(description)
                        }
                  </Col>
                </Row>
              </Container>
            </Col>
            {
              (prizes !== '' || sponsors !== '')
              && <InitiativeReward sponsors={sponsors} prizes={prizes} />

            }
            <Col xs="12" lg="2" className="icon d-flex align-items-center justify-content-end mr-3">
            <i className={getClass(isFavorite)} onClick={this.toggleFavorite} />
            </Col>
          </Row>
        </Container>
      </InitiativeCard>
    )
  }
}

export default InitiativeItem;
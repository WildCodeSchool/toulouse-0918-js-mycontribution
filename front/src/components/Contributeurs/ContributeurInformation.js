import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer, Text, Subtitle, Competence } from '../../data/styledComponents';
import instance from '../../helpers/instance';

class ContributeurInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    instance.get(`/api/users/${this.props.match.params.id}`)
      .then(res => res.data)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <div />;
    }
    return (
      <StyledContainer className="lists">
        <Container fluid>
          <Row className="d-flex">
            <Col lg="4">
              <img className="w-100 rounded-circle" src={user.picture} alt={user.picture} />
            </Col>
            <Col lg="8" className="mt-5">
              <Subtitle className="font-weight-bold">
                {user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}
                &nbsp;{user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
              </Subtitle>
              <Text
                className="m-1"
              >
                {user.email}
              </Text>
              <Text
                color="warning"
                className="text-warning m-1 font-weight-bold"
              >
                {user.connext}
              </Text>
            </Col>
          </Row>
          <Row className="mt-5">
            <Text className="font-weight-bold">
              <i className="fas fa-id-card fa-fw mr-2" />
              Description
            </Text>
          </Row>
          <Row>
            <Text className="text-justify">{user.presentation}</Text>
          </Row>
          <Row className="mt-5">
            <Text className="font-weight-bold">
              <i className="fas fa-star fa-fw mr-2" />
              Centre d'intérêts et compétences
            </Text>
          </Row>
          <Row className="mt-2">
            {user.skill.split(',').map((skill, key) => <Competence key={key}>{skill}</Competence>)}
          </Row>
        </Container>
      </StyledContainer>
    );
  }
}

export default ContributeurInformation;


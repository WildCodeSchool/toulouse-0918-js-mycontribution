import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import icons from '../../data/iconsPropose';
import { StyledContainer, Text, Title } from '../../data/styledComponents';

const AccueilNews = () => ({
  render() {
    return (
      <StyledContainer className="my-5">
        <Container fluid>
          <Row className="d-flex justify-content-center ">
            <Col sm="12" className="proposer rounded text-center">
              <Title>Vous souhaitez proposer : </Title>
              <Row className="d-flex justify-content-between my-5">
                {icons.map((icon, key) => {
                  const { fa, text } = icon;
                  return (
                    <Col lg="3" md="6" xs="12">
                      <Text>
                        <i className={`fas ${fa} fa-3x mb-3`} key={key} />
                        <Text>{text}</Text>
                      </Text>
                    </Col>
                  );
                })}
              </Row>
              <Text>Connectez-vous et cliquez sur le bouton<i className="fas fa-plus mx-2" /> dans la barre de navigation !</Text>
            </Col>
          </Row>
        </Container>
      </StyledContainer>
    );
  }
});

export default AccueilNews;

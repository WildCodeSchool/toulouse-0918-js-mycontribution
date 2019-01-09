import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Accueil.scss';
import { StyledContainer, Text, Subtitle } from '../../data/styledComponents';

const AccueilNews = () => ({
  render() {
    return (
      <StyledContainer>
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col xs="11" sm="10" md="12" className="rounded">
              <Subtitle id="presentation mb-4">Qu’est-ce que My Contribution ?</Subtitle>
              <Text>
                My Contribution est une plateforme collaborative qui vise à fédérer les collaborateurs souhaitant s'investir
                de manière ponctuelle sur des initiatives ou des missions diverses.
              </Text>
              <Text>
                Chaque utilisateur a la possibilité de proposer de nouvelles <b>initiatives</b> autour du thème de son choix,
                et d'organiser des événements liés à son projet.
                Les <b>missions</b> sont des tâches ponctuelles proposées par le service des ressources humaines et qui permettent
                aux contributeurs, s'ils le souhaitent, de participer à un projet Continental.
                La liste des <b>contributeurs</b> recenssent quant à elle la liste des utilisateurs inscris sur My Contribution.
                Elle permet par exemple aux porteurs de projet de consulter les profils de personnes qui pourraient rejoindre leur équipe.
              </Text>
            </Col>
          </Row>
        </Container>
      </StyledContainer>

    );
  }
});

export default AccueilNews;

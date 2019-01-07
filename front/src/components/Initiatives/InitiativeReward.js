import React, { Fragment } from 'react';
import { ContainerPrizes, Icon } from '../../data/styledComponents';
import { Col } from 'reactstrap';

const InitiativeReward = ({ sponsors, prizes }) => (

  <Col lg="2" className="d-flex align-items-center">
    <ContainerPrizes className="d-flex justify-content-between" orange>
        {
          prizes && sponsors  
          && 
          <Fragment>
            <Icon className="mr-2"><i className="fas fa-trophy fa-fw " ></i></Icon>
            <Icon className="ml-2"><i className="fas fa-handshake fa-fw " ></i></Icon>
          </Fragment>
        }
       {
         prizes && !sponsors && <Icon><i className="fas fa-trophy fa-fw " ></i></Icon>
       }
       {
         sponsors && !prizes && <Icon><i className="fas fa-handshake fa-fw " ></i></Icon>
       }
    </ContainerPrizes>
  </Col>

)

export default InitiativeReward;
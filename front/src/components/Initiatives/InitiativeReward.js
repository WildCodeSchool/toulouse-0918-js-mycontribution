import React, { Fragment } from 'react';
import { ContainerPrizes, Icon } from '../../data/styledComponents';
import { Col } from 'reactstrap';

const InitiativeReward = ({ sponsor, price }) => (

  <Col lg="2" className="d-flex align-items-center">
    <ContainerPrizes className="d-flex justify-content-between" orange>
        {
          price && sponsor  
          && 
          <Fragment>
            <Icon className="mr-2"><i className="fas fa-trophy fa-fw " ></i></Icon>
            <Icon className="ml-2"><i className="fas fa-handshake fa-fw " ></i></Icon>
          </Fragment>
        }
       {
         price && !sponsor && <Icon><i className="fas fa-trophy fa-fw " ></i></Icon>
       }
       {
         sponsor && !price && <Icon><i className="fas fa-handshake fa-fw " ></i></Icon>
       }
      
      
    </ContainerPrizes>
  </Col>

)

export default InitiativeReward;
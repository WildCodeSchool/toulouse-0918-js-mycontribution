import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CollapseFavoris extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <div
          onClick={this.toggle} 
          style={{ marginBottom: '1rem' }}>
          <i
            className="fas fa-heart"
            style={{ fontSize: '4em' }}>
          </i>
            <p>Mes favoris</p>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card className="block">
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CollapseFavoris;
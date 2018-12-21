
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../css/Profil.scss';

class ButtonsProfil extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ isLoading: true });
  }

  render() {
    const { isLoading } = this.state;

    return (

      <Button
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? 'Loading...' : 'Loading state'}
      </Button>
      
    );
  }
}
export default ButtonsProfil;


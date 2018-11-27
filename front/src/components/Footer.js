import React, { Component } from 'react';
import '../css/Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="p-4 text-center footer">
          <p className="text-white m-0">Mentions légales</p>
          <p className="text-white">Fait avec <i className="fas fa-heart"></i> par la Wild Code School</p>
        </div>
    );
  }
}
export default Footer;
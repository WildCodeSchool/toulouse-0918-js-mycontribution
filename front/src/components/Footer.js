import React, { Component } from 'react';
import { Text } from '../data/styledComponents';
import '../css/Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="p-3 text-center footer" >
          <Text className="text-white m-0">Mentions légales</Text>
          <Text className="text-white">Fait avec <i className="fas fa-heart"></i> par la Wild Code School</Text>
        </div>
    );
  }
}
export default Footer;
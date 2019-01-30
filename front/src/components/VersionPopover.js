import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
// import './VersionPopover.css';

const splitCommit = commit => {
  const bits = commit.split(' ');
  const sha = bits.shift();
  const msg = bits.join(' ');
  return { sha, msg };
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const commits = window.__VERSION_DATA__ || [];
    return (
      <div>
        <Button id="Popover1" type="button" onClick={this.toggle} style={{border:'none', padding: 5, fontSize: 8, background: '#222', color: '#777', fontWeight: 'bold'}}>
          v
        </Button>
        <Popover
          placement="top"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <ul style={{padding: 5, fontSize: 11}}>
          {
            commits.map((commit, i) => {
              const { sha, msg } = splitCommit(commit);
              return (
                <li style={{listStyleType:'none'}} key={i}>
                  <strong style={{color: '#a00'}}>{sha}</strong> {msg}</li>
              )
            })
          }</ul>
        </Popover>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';

const withRedux = (apiPath, actionCreators, key, subkey) => WrappedComponent => {
  const ConnectedComponent = class extends Component {
    render() {
      return (
        <WrappedComponent
          apiPath={apiPath}
          {...this.props}
        />
      );
    }
  };
  const mapStateToProps = state => ({
    items: state[key][subkey]
  });
  const [request, success, failure] = actionCreators;
  const mapDispatchToProps = {
    request, success, failure
  };
  return connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
};

export default withRedux;
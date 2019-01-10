import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSignIn } from '../actions/index';

const ProtectedRoute = ({
  component: Component, isAuthenticated, signIn, ...rest
}) => {
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    signIn();
  }
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ))
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.user !== null
});

const mapDispatchToProps = {
  signIn: authSignIn
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as AuthAction from '../actions/auth';

export const requireAuthentication = (Component) => {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated: boolean): void {
      if (isAuthenticated !== true) {
        let redirectAfterLogin = this.props.location.pathname;
        //@TODO redirect to login page
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state: AuthState) => ({
    token: state.token
  });

  const mapDispatchToProps = (dispatch: Function) => bindActionCreators(AuthAction, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import * as AuthAction from '../actions/auth';

export const requireAuthentication = (Component) => {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      console.log('willMount', this.props.isAuthenticated)
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      console.log('willReciveProps', nextProps.isAuthenticated)
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated: boolean): void {
      if (isAuthenticated !== true) {
        let redirectAfterLogin = this.props.location.pathname;
        this.props.router.push(`/login?next=${redirectAfterLogin}`);
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
    token: state.authReducer.token,
    isAuthenticated: state.authReducer.isAuthenticated,
    isAuthenticating: state.authReducer.isAuthenticating
  });

  const mapDispatchToProps = (dispatch: Function) => bindActionCreators(AuthAction, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthenticatedComponent));
}

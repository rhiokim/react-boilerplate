/* @flow */

import * as actionTypes from '../constants/actionTypes';

const initial = {
  token: '',
  userName: 'guest',
  isAuthenticated: false,
  isAuthenticating: false
};

export default (state: AuthState = initial, action: Object): AuthState => {
  switch (action.type) {
    case actionTypes.REQUEST_LOGIN:
      state = Object.assign({}, state, {
        isAuthenticating: true
      });
      break;
    case actionTypes.SUCCESS_LOGIN:
      state = Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.jwt.token,
        redirect: action.redirect
      });
      break;
    case actionTypes.REQUEST_LOGOUT:
      state = Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        token: '',
        userName: 'guest'
      })
      break;
    default:
      break;
  }

  return state;
};

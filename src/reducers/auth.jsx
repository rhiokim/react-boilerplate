/* @flow */

import * as actionTypes from '../constants/actionTypes';

const initial = {
  token: '',
  isFetching: false
};

export default (state: AuthState = initial, action: Object): AuthState => {
  switch (action.type) {
    case actionTypes.REQUEST_LOGIN:
      state = Object.assign({}, state, {
        isFetching: true
      });
      break;
    case actionTypes.SUCCESS_LOGIN:
      state = Object.assign({}, state, {
        isFetching: false,
        token: action.jwt.token
      });
      break;
    default:
      break;
  }

  return state;
};

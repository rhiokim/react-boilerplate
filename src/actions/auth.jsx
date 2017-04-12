/* @flow */
import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

const requestLogin = (): BaseAction => {
  return {
    type: actionTypes.REQUEST_LOGIN,
    receivedAt: new Date()
  };
};

const receiveLogin = (jwt: jwt): BaseAction => {
  return {
    type: actionTypes.SUCCESS_LOGIN,
    jwt: jwt,
    receivedAt: new Date()
  };
};

const loginError = () => {
  return {
    type: actionTypes.FAILURE_LOGIN,
    receivedAt: new Date()
  }
};

export const loginUser = (email: string, password: string) => {
  return (dispatch: Function) => {
    dispatch(requestLogin());

    return axios.get('http://localhost:8082/auth/getToken')
      .then(response => dispatch(receiveLogin(response.data)));
  };
};

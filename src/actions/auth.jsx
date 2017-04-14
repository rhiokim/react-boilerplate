/* @flow */
import api from '../api/auth';
import jwtDecode from 'jwt-decode';
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

const requestLogout = () => {
  return {
    type: actionTypes.REQUEST_LOGOUT,
    receivedAt: new Date()
  }
};

export const loginUser = (email: string, password: string) => {
  return (dispatch: Function) => {
    dispatch(requestLogin());

    const res = api.post('auth/getToken', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.then(response => {
      const token: string = response.data.token;
      const decode: any = jwtDecode(token);

      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', decode);

      dispatch(receiveLogin(response.data));
    });

    res.catch(error => {
      dispatch(loginError())
    });
  };
};

export const logout = () => {
  return (dispatch: Function) => {
    dispatch(requestLogout());
  }
};

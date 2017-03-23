/* @flow */
import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const requestUsers = () => {
  return {
    type: actionTypes.REQUEST_USERS
  };
};

const receiveUsers = data => {
  return {
    type: actionTypes.RECEIVE_USERS,
    users: data,
    receivedAt: Date.now()
  };
};

export const fetchUsers = () => {
  return (dispatch: Function) => {
    dispatch(requestUsers());
    return axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => dispatch(receiveUsers(response.data)));
  };
};

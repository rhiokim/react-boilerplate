/* @flow */
import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const requestUsers = (): UserAction => {
  return {
    type: actionTypes.REQUEST_USERS,
    receivedAt: new Date()
  };
};

const receiveUsers = (data): UserAction => {
  return {
    type: actionTypes.RECEIVE_USERS,
    users: data,
    receivedAt: new Date()
  };
};

export const fetchUsers = () => {
  return (dispatch: Function) => {
    dispatch(requestUsers());
    return axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => dispatch(receiveUsers(response.data)));
  };
};

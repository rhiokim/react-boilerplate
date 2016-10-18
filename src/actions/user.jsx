import axios from 'axios';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const requestUsers = () => {
  return {
    type: REQUEST_USERS
  };
};

const receiveUsers = data => {
  return {
    type: RECEIVE_USERS,
    users: data,
    receivedAt: Date.now()
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(requestUsers());
    return axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => dispatch(receiveUsers(response.data)));
  };
};

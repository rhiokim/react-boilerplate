import axios from 'axios';
import store from 'store';

export const getUsers = () => {
  return axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      store.dispatch({
        type: 'GET_USERS',
        users: response.data
      });

      return response;
    }).catch(err => {
      console.error(err);
    });
};

/* @flow */
import axios from 'axios'
import * as actionTypes from '../constants/actionTypes'

export const requestUsers = (): UserAction => {
  return {
    type: actionTypes.REQUEST_USERS,
    receivedAt: new Date()
  }
}

const receiveUsers = (users: Array<User>): UserAction => {
  return {
    type: actionTypes.RECEIVE_USERS,
    users: users,
    receivedAt: new Date()
  }
}

export const fetchUsers = () => {
  return (dispatch: Function) => {
    dispatch(requestUsers())
    return axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => dispatch(receiveUsers(response.data)))
  }
}

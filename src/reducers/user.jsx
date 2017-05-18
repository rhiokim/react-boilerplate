/* @flow */
/* sample */
import * as actionTypes from '../constants/actionTypes'
import type {UserState} from './user.d'

const initial = {
  isFetching: false,
  users: []
}

export default (state: UserState = initial, action: Object): UserState => {
  switch (action.type) {
    case actionTypes.REQUEST_USERS:
      state = Object.assign({}, state, {
        isFetching: true
      })
      break
    case actionTypes.RECEIVE_USERS:
      state = Object.assign({}, state, {
        isFetching: false,
        users: action.users
      })
      break
    default:
      break
  }

  return state
}

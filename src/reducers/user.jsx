/* @flow */
import * as actionTypes from '../constants/actionTypes'

type State = {
  users: Array<User>,
  isFetching?: boolean
}

const initial = {
  isFetching: false,
  users: []
}

export default (state: State = initial, action: Object): State => {
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

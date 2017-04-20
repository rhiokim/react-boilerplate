// @flow
/* sample */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import type {AppState} from '../reducers'
import * as UserActions from '../actions/user'
import UserList from '../components/users/UserList'

class Users extends React.Component {
  componentWillMount () {
    this.props.fetchUsers()
  }

  handleChangeClientState (newState) {
    console.log(newState)
  }

  render () {
    const {users} = this.props
    return (
      <div>
        <UserList users={users} />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  users: state.userReducer.users
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users)

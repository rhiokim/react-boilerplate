import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'

import * as UserActions from '../actions/user'
import UserList from '../components/users/UserList'

class Users extends React.Component {
  constructor (props) {
    super(props)

    this.handleChangeClientState = this.handleChangeClientState.bind(this)
  }

  componentWillMount () {
    this.props.fetchUsers()
  }

  componentDidMount () {}

  componentWillReceiveProps () {}

  handleChangeClientState (newState) {
    console.log(newState)
  }

  render () {
    const {users} = this.props
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
          title="User List"
          titleTemplate="App - %s"
          defaultTitle="My Default Title"
          onChangeClientState={this.handleChangeClientState}
        />
        <UserList users={users} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users)

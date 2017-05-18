/* @flow */
/* sample */
import React from 'react'

import UserItem from './UserItem'

export default class UserList extends React.Component {
  props: {
    users: Array<User>
  }

  render () {
    const {users} = this.props

    return (
      <div className="container">
        <h3>Users</h3>
        <ul>
          {users.map((user: User) => {
            return <UserItem key={user.id} {...user} />
          })}
        </ul>
      </div>
    )
  }
}

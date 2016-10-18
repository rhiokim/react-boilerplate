import React, {Component} from 'react';

import UserItem from './UserItem';

export default class UserList extends Component {
  render() {
    const {users} = this.props;
    console.log(users);

    return (
      <div className="container">
        <h3>Users</h3>
        <ul>
          {users.map(user => {
            return (
              <UserItem key={user.id} {...user} />
            );
          })}
        </ul>
      </div>
    );
  }
}

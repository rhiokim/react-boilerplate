import React, {Component} from 'react';

import UserItem from './UserItem';

export default class UserList extends Component {
  render() {
    const {users} = this.props;
    console.log(users);

    return (
      <table className="table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <UserItem key={user.id} {...user} />
            );
          })}
        </tbody>
      </table>
    );
  }
}

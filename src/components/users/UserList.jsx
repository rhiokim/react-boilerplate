import React from 'react';

import UserItem from './UserItem';

export default class UserList extends React.Component {
  render() {
    const {users} = this.props;

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

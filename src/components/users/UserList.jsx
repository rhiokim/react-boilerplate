import React from 'react';
import {Card} from 'semantic-ui-react'

import UserItem from './UserItem';

export default class UserList extends React.Component {
  render() {
    const {users} = this.props;

    return (
      <Card.Group>
      {users.map(user => {
        return (
          <UserItem key={user.id} {...user} />
        );
      })}
      </Card.Group>
    );
  }
}

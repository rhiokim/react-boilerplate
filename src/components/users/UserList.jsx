import React from 'react';
import {Row} from 'antd';

import UserItem from './UserItem';

export default class UserList extends React.Component {
  render() {
    const {users} = this.props;

    return (
      <Row style={{margin: '10px'}}>
        {users.map(user => {
          return (
            <UserItem key={user.id} {...user} />
          );
        })}
      </Row>
    );
  }
}

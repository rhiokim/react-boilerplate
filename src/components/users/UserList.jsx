/* @flow */
import React from 'react';
import {Grid, Cell} from 'react-mdl';

import UserItem from './UserItem';

export default class UserList extends React.Component {
  props: {
    users: Array<User>
  };

  render() {
    const {users} = this.props;

    return (
      <Grid component="section" className="section--center" shadow={0} noSpacing>
        <Cell col={12} tablet={12} phone={12}>
          <ul>
            {users.map(user => {
              return (
                <UserItem key={user.id} {...user} />
              );
            })}
          </ul>
        </Cell>
      </Grid>
    );
  }
}

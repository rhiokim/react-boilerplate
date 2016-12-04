import React from 'react';
import { Card } from 'semantic-ui-react'

export default class UserItem extends React.Component {
  render() {
    const {name, email, company, website} = this.props;
    return (
        <Card>
          <Card.Content>
            <Card.Header>
              <a href={`//${website}`} target="_blank">{name}</a>
            </Card.Header>
            <Card.Meta>{email}</Card.Meta>
            <Card.Description>{company.catchPhrase}</Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

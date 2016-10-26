import React from 'react';

export default class UserItem extends React.Component {
  render() {
    const {name, email} = this.props;

    return (
      <li onClick={this.props.onClick}>{name}: {email}</li>
    );
  }
}

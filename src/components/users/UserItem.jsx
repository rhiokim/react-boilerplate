import React from 'react';

export default class UserItem extends React.Component {
  render() {
    const {name, email, phone, website} = this.props;

    return (
      <tr>
        <td onClick={this.props.onClick}>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{website}</td>
      </tr>
    );
  }
}

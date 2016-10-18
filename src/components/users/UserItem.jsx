import React, {Component} from 'react';

export default class UserItem extends Component {
  render() {
    const {name, email} = this.props;

    return (
      <li onClick={this.props.onClick}>{name}: {email}</li>
    );
  }
}

/* @flow */
/* sample */
import React from 'react'

export default class UserItem extends React.Component {
  props: {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
    onClick?: (event: Event) => void
  }

  render () {
    const {name, email} = this.props

    return <li onClick={this.props.onClick}>{name}: {email}</li>
  }
}

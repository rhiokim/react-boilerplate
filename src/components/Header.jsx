import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <Link to="/">Home</Link>,
        <Link to="/login">login</Link>,
        <Link to="/dashboard">dashboard</Link>
      </div>
    )
  }
}

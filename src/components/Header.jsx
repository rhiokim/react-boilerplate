import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <Link to="/">Home</Link>,
        <Link to="/users">users</Link>,
        <Link to="/articles">articles</Link>,
        <Link to="/admin">admin</Link>
      </div>
    )
  }
}

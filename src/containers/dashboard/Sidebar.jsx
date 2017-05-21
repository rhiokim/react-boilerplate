import React from 'react'
import { Link } from 'react-router'

const Sidebar = ({ text }) => (
  <div>
    <h3>SideBar</h3>
    {text}
    <ul>
      <li>
        <Link to="/dashboard/users">Users</Link>
      </li>
      <li>
        <Link to="/dashboard/articles">Articles</Link>
      </li>
    </ul>
  </div>
)

export default Sidebar

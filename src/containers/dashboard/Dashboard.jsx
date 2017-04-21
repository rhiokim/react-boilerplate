import React from 'react'

import Header from '../../components/Header'
import Sidebar from './Sidebar'

const Dashboard = props => (
  <div>
    <Header />
    <h1>Dashboard</h1>
    <Sidebar text="this is sidebar" />
    {props.children}
  </div>
)

export default Dashboard

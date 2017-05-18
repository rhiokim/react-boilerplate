import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'
import Dashboard from './containers/dashboard'
import Main from './containers/main'

export default (
  <Route path="/" component={App}>
    <Route component={Main.Layout}>
      <IndexRoute component={Main.Home} />
      <Route path="login" component={Main.Login} />
    </Route>
    <Route path="/dashboard" component={Dashboard.Layout}>
      <IndexRoute component={Dashboard.Home} />
      <Route path="users" component={Dashboard.Users} />
      <Route path="articles" component={Dashboard.Articles} />
    </Route>
  </Route>
)

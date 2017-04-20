import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Users from './containers/Users'
import Articles from './containers/Articles'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/articles" component={Articles} />
  </Route>
)

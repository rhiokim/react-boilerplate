import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

/**
 * Customized CSS for App initilization
 */
// import './assets/css/normalize.css';
// import './assets/less/_.less';
// import './assets/sass/_.scss';

import routes from './routes';
import configureStore from './store/configureStore';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './assets/css/normalize.css';
import './assets/css/main.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const root = document.body.appendChild(document.createElement('div'));
const App = () =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>;

render(<App />, root);

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware, routerReducer as routing} from 'react-router-redux';
import {persistState} from 'redux-devtools';
import createLogger from 'redux-logger';

import articleReducer from '../reducers/article';
import userReducer from '../reducers/user';
import contactReducer from '../reducers/contact';

import DevTools from '../DevTools';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

const rootReducer = combineReducers({
  articleReducer: articleReducer,
  userReducer: userReducer,
  contactReducer: contactReducer,
  routing: routing,
});

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  DevTools.instrument(),
  persistState(
    window.location.href.match(/[?&]_k=([^&]+)\b/)
  )
);

const configureStore = initialState => {
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;

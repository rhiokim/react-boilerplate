import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware, routerReducer as routing} from 'react-router-redux';
// import reducers from 'reducers';

import articleReducer from '../reducers/article';
import userReducer from '../reducers/user';
import contactReducer from '../reducers/contact';

const router = routerMiddleware(hashHistory);

const rootReducer = combineReducers({
  articleReducer: articleReducer,
  userReducer: userReducer,
  contactReducer: contactReducer,
  routing: routing,
});

const enhancer = applyMiddleware(thunk, router);

const configureStore = initialState => {
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;

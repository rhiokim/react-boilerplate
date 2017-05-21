import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { hashHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { persistState } from 'redux-devtools'
import { createLogger } from 'redux-logger'

import reducers from '../reducers'
import DevTools from '../DevTools'

const logger = createLogger({
  level: 'info',
  collapsed: true
})

const router = routerMiddleware(hashHistory)

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]_k=([^&]+)\b/))
)

const configureStore = initialState => {
  return createStore(rootReducer, initialState, enhancer)
}

export default configureStore

/* @flow */
/* sample */
import * as actionTypes from '../constants/actionTypes'
import type {ArticleState} from './article.d'

const initial = {
  isFetching: false,
  articles: []
}

export default (
  state: ArticleState = initial,
  action: Object
): ArticleState => {
  switch (action.type) {
    case actionTypes.REQUEST_ARTICLES:
      state = Object.assign({}, state, {
        isFetching: true
      })
      break
    case actionTypes.RECEIVE_ARTICLES:
      state = Object.assign({}, state, {
        isFetching: false,
        articles: action.articles
      })
      break
    default:
      break
  }

  return state
}

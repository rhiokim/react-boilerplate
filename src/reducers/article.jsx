/* @flow */

type State = {
  articles: Array<Article>;
  isFetching?: boolean;
}

import * as actionTypes from '../constants/actionTypes';

const initial = {
  isFetching: false,
  articles: []
};

export default (state: State = initial, action: Object): State => {
  switch (action.type) {
    case actionTypes.REQUEST_ARTICLES:
      state = Object.assign({}, state, {
        isFetching: true
      });
      break;
    case actionTypes.RECEIVE_ARTICLES:
      state = Object.assign({}, state, {
        isFetching: false,
        articles: action.articles
      });
      break;
    default:
      break;
  }

  return state;
};

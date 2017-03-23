/* @flow */
import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const requestArticles = (): ArticleAction => {
  return {
    type: actionTypes.REQUEST_ARTICLES,
    receivedAt: new Date()
  };
};

const receiveArticles = (data): ArticleAction => {
  return {
    type: actionTypes.RECEIVE_ARTICLES,
    articles: data,
    receivedAt: new Date()
  };
};

export const fetchArticles = () => {
  return (dispatch: Function) => {
    dispatch(requestArticles());
    return axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => dispatch(receiveArticles(response.data)));
  };
};

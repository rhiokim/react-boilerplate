/* @flow */
import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const requestArticles = () => {
  return {
    type: actionTypes.REQUEST_ARTICLES
  };
};

const receiveArticles = data => {
  return {
    type: actionTypes.RECEIVE_ARTICLES,
    articles: data,
    receivedAt: Date.now()
  };
};

export const fetchArticles = () => {
  return (dispatch: Function) => {
    dispatch(requestArticles());
    return axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => dispatch(receiveArticles(response.data)));
  };
};

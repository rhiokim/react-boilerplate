import axios from 'axios';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const requestArticles = () => {
  return {
    type: REQUEST_ARTICLES
  };
};

const receiveArticles = data => {
  return {
    type: RECEIVE_ARTICLES,
    articles: data,
    receivedAt: Date.now()
  };
};

export const fetchArticles = () => {
  return dispatch => {
    dispatch(requestArticles());
    return axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => dispatch(receiveArticles(response.data)));
  };
};

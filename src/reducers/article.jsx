const initial = {
  isFetching: false,
  articles: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'REQUEST_ARTICLES':
      state = Object.assign({}, state, {
        isFetching: true
      });
      break;
    case 'RECEIVE_ARTICLES':
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

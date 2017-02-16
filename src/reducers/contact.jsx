const initial = {
  contacts: {
    rows: []
  }
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'REQUEST_CONTACTS':
      state = Object.assign({}, state, {
        contacts: {
          rows: []
        }
      });
      break;
    case 'RECEIVE_CONTACTS':
      state = Object.assign({}, state, {
        contacts: action.contacts
      });
      break;
    default:
      break;
  }

  return state;
};

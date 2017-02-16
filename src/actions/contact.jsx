import db from '../api/db';
import uuid from 'node-uuid';

export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';

export const requestContacts = () => {
  return {
    type: REQUEST_CONTACTS
  };
};

const receiveContacts = data => {
  return {
    type: RECEIVE_CONTACTS,
    contacts: data,
    receivedAt: Date.now()
  };
};

const _fetchContacts = () => {}

export const fetchContacts = () => {
  return dispatch => {
    dispatch(requestContacts());

    function map(doc) {
      /* global emit */
      emit(null);
    }

    return db.query(map, {include_docs : true}).then(response => {
      dispatch(receiveContacts(response))
    }).catch(function (err) {
      console.log(err);
    });
  };
};

export const putContact = (contact) => {
  return dispatch => {
    return db.put({
      _id: uuid.v4(),
      ...contact
    }).then(response => {
      return dispatch(fetchContacts())
    }).catch(function (err) {
      console.log(err);
    });
  };
}

import { combineReducers } from 'redux';
import types from './types';
/* State shape
state: {
  announcments: [],
}
*/
const announcment = (state, action) => {
  switch (action.type) {
    case types.ADD_ANNOUNCMENT:
      return {
        id: action.announcment.id,
        text: action.announcment.text,
      };
    default:
      return state;
  }
};

const announcments = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ANNOUNCMENT:
      return [...state, announcment(undefined, action)];
    case types.SET_ANNOUNCMENTS:
      return action.announcments;
    default:
      return state;
  }
};

const fetchAnnouncmentsStatus = (state = { loading: false, error: '' }, action) => {
  switch (action.type) {
    case types.FETCH_ANNOUNCMENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case types.FETCH_ANNOUNCMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case types.FETCH_ANNOUNCMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Failed To Fetch Announcements',
      };

    default:
      return state;
  }
};

const announcmentsReducer = combineReducers({
  announcments,
  fetchAnnouncmentsStatus,
});

export default announcmentsReducer;

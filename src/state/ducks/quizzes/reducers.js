import { combineReducers } from 'redux';
import types from './types';
/* State shape
state: {
  quizzes: [],
}
*/
const quiz = (state, action) => {
  switch (action.type) {
    case types.ADD_QUIZ:
      return {
        id: action.quiz.id,
        text: action.quiz.text,
      };
    default:
      return state;
  }
};

const quizzes = (state = [], action) => {
  switch (action.type) {
    case types.ADD_QUIZ:
      return [...state, quiz(undefined, action)];
    case types.SET_QUIZZES:
      return action.quizzes;
    default:
      return state;
  }
};

const fetchQuizzesStatus = (state = { loading: false, error: '' }, action) => {
  switch (action.type) {
    case types.FETCH_QUIZZES_BEGIN:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case types.FETCH_QUIZZES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case types.FETCH_QUIZZES_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Failed To Fetch Quizzes',
      };

    default:
      return state;
  }
};

const quizzesReducer = combineReducers({
  quizzes,
  fetchQuizzesStatus,
});

export default quizzesReducer;

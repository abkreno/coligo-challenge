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


const quizzesReducer = combineReducers({
  quizzes,
});

export default quizzesReducer;

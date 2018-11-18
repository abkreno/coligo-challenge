import types from './types';

export const fetchQuizzes = () => ({
  type: types.FETCH_QUIZZES_BEGIN,
});

export const setQuizzes = quizzes => ({
  type: types.SET_QUIZZES,
  quizzes,
});

export const addQuiz = quiz => ({
  type: types.ADD_QUIZ,
  quiz,
});

export default {
  fetchQuizzes,
  setQuizzes,
  addQuiz,
};

import types from './types';
import fakeQuizzesService from '../../../services/fakeQuizzesService';

export const fetchQuizzesBegin = () => ({
  type: types.FETCH_QUIZZES_BEGIN,
});

export const fetchQuizzesSuccess = () => ({
  type: types.FETCH_QUIZZES_SUCCESS,
});

export const setQuizzes = quizzes => ({
  type: types.SET_QUIZZES,
  quizzes,
});

export const fetchQuizzesError = () => ({
  type: types.FETCH_QUIZZES_ERROR,
});

export const fetchQuizzes = () => async (dispatch) => {
  dispatch(fetchQuizzesBegin());
  try {
    const quizzes = await fakeQuizzesService();
    dispatch(setQuizzes(quizzes));
    dispatch(fetchQuizzesSuccess());
  } catch (error) {
    console.log(error);
    dispatch(fetchQuizzesError());
  }
};


export const addQuiz = quiz => ({
  type: types.ADD_QUIZ,
  quiz,
});

export default {
  fetchQuizzes,
  setQuizzes,
  addQuiz,
};

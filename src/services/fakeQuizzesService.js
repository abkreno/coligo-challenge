import fakeQuizzesData from './fakeQuizzesData.json';

const fakeQuizzesService = async () => {
  const quizzes = fakeQuizzesData;
  return new Promise((resolve) => {
    setTimeout(() => resolve(quizzes), 1500);
  });
};

export default fakeQuizzesService;

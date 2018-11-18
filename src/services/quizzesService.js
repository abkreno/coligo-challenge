import { API_URL } from './constants';

const quizzesService = async () => {
  const response = await fetch(`${API_URL}/quizzes`);
  return response.json();
};

export default quizzesService;

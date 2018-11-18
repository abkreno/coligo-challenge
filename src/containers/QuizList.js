import { connect } from 'react-redux';
import QuizList from '../components/QuizList';
import { addQuiz, fetchQuizzes } from '../state/ducks/quizzes/actions';

const mapStateToProps = state => ({
  quizzes: state.quizzesState.quizzes,
  loading: state.quizzesState.fetchQuizzesStatus.loading,
  error: state.quizzesState.fetchQuizzesStatus.error,
});

const mapDispatchToProps = dispatch => ({
  addQuiz: quiz => dispatch(addQuiz(quiz)),
  fetchQuizzes: () => dispatch(fetchQuizzes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);

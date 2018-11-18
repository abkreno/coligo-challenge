import { connect } from 'react-redux';
import QuizList from '../components/QuizList';
// import { fetchQuizzes } from '../state/ducks/quizzes/actions';

const mapStateToProps = state => ({
  quizzes: state.quizzesState.quizzes,
});

const mapDispatchToProps = dispatch => ({
  // fetchQuizzes: quiz => dispatch(fetchQuizzes(quiz)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);

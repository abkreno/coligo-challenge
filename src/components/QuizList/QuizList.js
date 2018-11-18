import React from 'react';
import PropTypes from 'prop-types';
import Quiz from '../Quiz';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import './QuizList.scss';

class QuizList extends React.Component {
  componentDidMount() {
    const { fetchQuizzes } = this.props;
    fetchQuizzes();
  }

  render() {
    const { quizzes, loading } = this.props;
    return (
      <Card title="Quizzes" description="We educate warirors! Keep updated :)" link="All">
        {/* <button onClick={() => addQuiz({
          id: quizzes.length + 1,
          text: `Quiz ${quizzes.length + 1}`,
        })}
        >
          Add Quiz
        </button> */}
        { loading ? <Loader /> :
        <ul className="cg-quiz-list">
          {quizzes.map(quiz => (
            <Quiz key={quiz.id} {...quiz} />
          ))}
        </ul> }
      </Card>
    );
  }
}

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    topicName: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  fetchQuizzes: PropTypes.func.isRequired,
};

export default QuizList;

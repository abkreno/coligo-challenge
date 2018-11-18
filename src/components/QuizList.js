import React from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Card from './Card/Card';

const QuizList = ({ quizzes }) => (
  <Card title="Quiz" description="We educate warirors! Keep updated :)" link="All">
    {/* <button onClick={() => addQuiz({
      id: quizzes.length + 1,
      text: `Quiz ${quizzes.length + 1}`,
    })}
    >
      Add Quiz
    </button> */}
    <ul>
      {quizzes.map(quiz => (
        <Quiz key={quiz.id} {...quiz} />
      ))}
    </ul>

  </Card>
);

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  // addQuiz: PropTypes.func.isRequired,
};

export default QuizList;

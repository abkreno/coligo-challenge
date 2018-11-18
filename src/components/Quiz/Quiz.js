import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import './Quiz.scss';

const Quiz = ({
  name,
  type,
  courseName,
  topicName,
  dueDate,
}) => (
  <li className="cg-quiz">
    <div className="cg-quiz-info">
      <FontAwesomeIcon className="cg-quiz-icon" icon={type === 'quiz' ? 'hourglass-half' : 'calendar-check'} />
      <h5 className="cg-quiz-title">
        {name}
        <br />
      </h5>
    </div>
    <div className="cg-quiz-extra">
      <h5 className="cg-quiz-extra-pair">
        <span className="cg-quiz-extra-key">
          Course:
        </span>
        {courseName}
      </h5>
      <h5 className="cg-quiz-extra-pair">
        <span className="cg-quiz-extra-key">
          Topic:
        </span>
        {topicName}
      </h5>
      <h5 className="cg-quiz-extra-pair">
        <span className="cg-quiz-extra-key">
          Due to:
        </span>
        {dueDate}
      </h5>
    </div>
    <Button className="cg-quiz-btn" type="invert">
      {type === 'quiz' ? 'Start Quiz' : 'Solve Assignment'}
    </Button>
  </li>
);

Quiz.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  topicName: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
};

export default Quiz;

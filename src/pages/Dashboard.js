import React from 'react';
import AnnouncmentList from '../containers/AnnouncmentList';
import QuizList from '../containers/QuizList';
import './Dashboard.scss';
import Button from '../components/Button';
import studyImg from '../assets/img/study.png';

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-title">
          EXAMS TIME
        </h1>
        <h5 className="banner-subtitle">
          {"Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams."}
        </h5>
        <small className="banner-qoute">
          {'"Nothing happens, until something moves" -Albert Einstein'}
        </small>
        <Button>View exams tips</Button>
      </div>
      <div className="banner-right">
        <img src={studyImg} alt="Banner Img" />
      </div>
    </div>
    <AnnouncmentList />
    <QuizList />
  </div>
);

Dashboard.propTypes = {
};

export default Dashboard;

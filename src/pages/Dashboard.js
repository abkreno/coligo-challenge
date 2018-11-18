import React from 'react';
import AnnouncmentList from '../containers/AnnouncmentList';
import QuizList from '../containers/QuizList';

const Dashboard = () => (
  <div>
    <div>
      <h3>Dashboard Page</h3>
      <AnnouncmentList />
      <QuizList />
    </div>
  </div>
);

Dashboard.propTypes = {
};

export default Dashboard;

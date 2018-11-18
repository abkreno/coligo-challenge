import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../withAuth';
import Button from '../components/Button';

const Home = ({ login }) => (
  <div className="dashboard-container">
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-title">
          WELCOME TO COLIGO!
        </h1>
        <h5 className="banner-subtitle">
          {"Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams."}
        </h5>
        <small className="banner-qoute">
          {'Please login to see your dashboard'}
        </small>
        <Button onClick={login}>Login</Button>
      </div>
      <div className="banner-img" />
    </div>
  </div>
);

Home.propTypes = {
  login: PropTypes.func.isRequired,
};

export default withAuth(Home);

import React, { Component } from 'react';
import AnnouncementList from '../containers/AnnouncementList';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to Coligo</h2>
        </div>
        <AnnouncementList />
      </div>
    );
  }
}

export default MainLayout;

import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.scss';

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  render() {
    const { children, menu } = this.props;
    return (
      <div className="cg-drop-down">
        <button className="cg-drop-down-btn" onClick={() => this.setState({ open: !this.state.open })}>
          {children}
        </button>
        <div className={`cg-drop-down-menu ${this.state.open ? 'cg-dropdown-open' : 'cg-dropdown-closed'}`}>
          {menu}
        </div>
      </div>
    );
  }
} 

DropDown.propTypes = {
  children: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
};

export default DropDown;

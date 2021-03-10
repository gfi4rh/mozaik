import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProgressBar extends Component {

  render() {

    const style = {
      backgroundColor: color,
      width: completed + '%',
      transition: `width ${animation}ms`,
      height: height,
    };

      return (
          <div className="progress-bar_wrapper" style={style}>
          </div>
      );
  }
}

/*ProgressBar.propTypes = {
};*/

ProgressBar.displayName = 'ProgressBar';

ProgressBar.defaultProps = {
  completed: 0,
  color: '#0BD318',
  animation: 200,
  height: 10
};


export default ProgressBar;
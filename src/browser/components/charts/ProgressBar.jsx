import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProgressBar extends Component {

  render() {

    const { completed, color, colorEnd, done, open, height } = this.props;
    const pourcent = completed || (done * 100)/(done+open); 

    const style_progress = {
      backgroundColor: color,
      width: pourcent + '%'
    };

    const style_rest = {
      backgroundColor: colorEnd,
      width : (100 - pourcent) + '%'
    }

    return (
        <div className="progress-bar_wrapper" style={{height: height}}>
          <div className="progress-bar_part" style={style_progress}>{completed === null || done}</div>
          <div className="progress-bar_part" style={style_rest}>{completed === null || open}</div>
        </div>
    );
  }
};

ProgressBar.defaultProps = {
  color: "#27ae60",
  colorEnd : '#535c68',
  height: '2em',
  completed : 0
};

ProgressBar.propTypes = {
  color: PropTypes.string,
  colorEnd: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  done : PropTypes.number,
  open : PropTypes.number,
  completed : PropTypes.number,
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
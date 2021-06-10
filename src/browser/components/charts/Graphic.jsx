import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart  from 'chart.js';
import _uniqueId from 'lodash/uniqueId';

class Graphic extends Component {

  constructor(props) {
    super(props);
    this.id = _uniqueId('chart_'); //prefix chart_ for unique ID
  }

  componentDidMount() {

    const { type, labels, data, colors, options } = this.props;

    let ctx = document.getElementById(this.id).getContext('2d');

    let style = window.getComputedStyle(document.getElementById(this.id));

    Chart.defaults.global.defaultFontColor = style.getPropertyValue('color');
    Chart.defaults.global.defaultFontFamily = style.getPropertyValue('font-family')
    Chart.defaults.global.defaultFontSize = 15

    this.chartInstance = new Chart(ctx, {
      type : type,
      data : {
        labels : labels,
        datasets : [{
          data : data,
          backgroundColor : colors,
          hoverBackgroundColor : colors,
          borderWidth : 0.5
        }]
      },
      options
    });
  }

  render() {

    const { height, width } = this.props;

    return (
        <canvas id={this.id} height={height} width={width}></canvas>

    );
  }
};

Graphic.defaultProps = {
  type: 'pie',
  height: '1em',
  width: '1em',
  options: {
    maintainAspectRation : false,
    layout : {
      padding : 5
    }
  }
};

Graphic.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.object
};

Graphic.displayName = 'Graphic';

export default Graphic;
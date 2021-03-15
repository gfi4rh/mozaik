import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart  from 'chart.js';
import _uniqueId from 'lodash/uniqueId';



class Camembert extends Component {

  constructor(props) {
    super(props);
    this.id = _uniqueId('chart_'); //prefix chart_ for unique ID
  }

  componentDidMount() {

    const { data, options, legend, type } = this.props;

    options.legend = legend;

    let ctx = document.getElementById(this.id).getContext('2d');

    let style = window.getComputedStyle(document.getElementById(this.id));

    Chart.defaults.global.defaultFontColor = style.getPropertyValue('color');
    Chart.defaults.global.defaultFontFamily = style.getPropertyValue('font-family')
    Chart.defaults.global.defaultFontSize = 15

    this.chartInstance = new Chart(ctx, {
      type,
      data,
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

Camembert.defaultProps = {
  legend: {
    display: true,
    position: 'bottom'
  },
  type: 'pie',
  height: '1em',
  width: '1em',
  options: {}
};

Camembert.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  legend: PropTypes.object,
  options: PropTypes.object
};

Camembert.displayName = 'Camembert';

export default Camembert;
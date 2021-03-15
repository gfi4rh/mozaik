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
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };

    const {options, legend, type } = this.props;

    options.legend = legend;

    let ctx = document.getElementById(this.id).getContext('2d');

    this.chartInstance = new Chart(ctx, {
      type,
      data,
      options
    });
  }

  render() {

    return (
      <canvas id={this.id} width='0.5em' height='0.5em'></canvas>
    );
  }
};

Camembert.defaultProps = {
  legend: {
    display: true,
    position: 'bottom'
  },
  type: 'pie',
  height: '2em',
  width: '2em',
  options: {},
};

Camembert.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  legend: PropTypes.object,
  options: PropTypes.object,
};

Camembert.displayName = 'Camembert';

export default Camembert;
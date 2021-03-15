import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Camembert extends Component {

  render() {
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

    const {options, legend, type} = this.props;

    let node = (
      <canvas width='2em' height='2em'></canvas>
    );

    let ctx = node.getContext('2d');
    let chart = new Chart(ctx, {
      type : 'pie',
      data : {data}
    })

    return (
        {node}
    );
  }
};

Camembert.defaultProps = {
  legend: {
    display: true,
    position: 'bottom'
  },
  type: 'pie',
  height: '3em',
  width: '3em',
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
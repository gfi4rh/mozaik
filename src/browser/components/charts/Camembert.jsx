import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2'


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

    return (
        <div>
          <Pie data={data}/>
        </div>
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
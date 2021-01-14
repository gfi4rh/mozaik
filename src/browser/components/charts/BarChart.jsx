import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BarChart                        from './BarChart';


class BarChartComponent extends Component {
    componentDidMount() {
        let { options } = this.props;

        this.barChart = new BarChart(React.findDOMNode(this.refs.svg), options);
    }

    shouldComponentUpdate(data) {
        if (!data.data) {
            return false;
        }

        const wrapper = React.findDOMNode(this);

        this.barChart
            .size(wrapper.offsetWidth, wrapper.offsetHeight)
            .data(data.data)
            .draw()
        ;

        return false;
    }

    render() {
        return (
            <div className="bar-chart_wrapper">
                <svg ref="svg"/>
            </div>
        );
    }
}

BarChartComponent.propTypes = {
    options: PropTypes.object.isRequired,
    data:    PropTypes.arrayOf(PropTypes.shape({
        abscissValue:  PropTypes.number,
        ordinateValue: PropTypes.string
    })).isRequired
};

BarChartComponent.defaultProps = {
    data: []
};


export default BarChartComponent;

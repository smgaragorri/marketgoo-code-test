import React from 'react';
import PropTypes from 'prop-types';
import { Metric } from '@marketgoo/ola';

const CovidMetric = (props) => {
  return (
    <Metric
      title={props.title}
      value={
        Math.abs(props.value) > 999999
          ? Math.sign(props.value) *
              (Math.abs(props.value) / 1000000).toFixed(2) +
            ' M'
          : Math.abs(props.value) > 999
          ? Math.sign(props.value) * (Math.abs(props.value) / 1000).toFixed(2) +
            ' k'
          : props.value.toString()
      }
      variant={props.variant}
    />
  );
};

CovidMetric.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CovidMetric;

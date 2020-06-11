import React from 'react';
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
          : Math.sign(props.value) * Math.abs(props.value) ||
            Math.abs(props.value) > 999
          ? Math.sign(props.value) * (Math.abs(props.value) / 1000).toFixed(2) +
            ' k'
          : Math.sign(props.value) * Math.abs(props.value)
      }
      variant={props.variant}
    />
  );
};

export default CovidMetric;

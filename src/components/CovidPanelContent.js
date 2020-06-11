import React from 'react';
import PropTypes from 'prop-types';
import { PanelContent } from '@marketgoo/ola';
import CovidMetric from './CovidMetric';

const CovidPanelContent = (props) => {
  return (
    <PanelContent className='ola_panel-content grid'>
      <CovidMetric title='Nuevos confirmados' value={props.data.newConfirmed} />
      <CovidMetric
        title='Total confirmados'
        value={props.data.totalConfirmed}
      />
      <CovidMetric
        title='Nuevos fallecidos'
        value={props.data.newDeaths}
        variant='negative'
      />
      <CovidMetric
        title='Total fallecidos'
        value={props.data.totalDeaths}
        variant='negative'
      />
      <CovidMetric
        title='Nuevos recuperados'
        value={props.data.newRecovered}
        variant='positive'
      />
      <CovidMetric
        title='Total recuperados'
        value={props.data.totalRecovered}
        variant='positive'
      />
    </PanelContent>
  );
};

CovidPanelContent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CovidPanelContent;

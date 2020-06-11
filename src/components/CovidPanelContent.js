import React from 'react';
import { PanelContent } from '@marketgoo/ola';
import CovidMetric from './CovidMetric';

const CovidPanelContent = (props) => {
  return (
    <PanelContent className='ola_panel-content grid'>
      <CovidMetric
        title='Nuevos confirmados'
        value={props.global.newConfirmed}
      />
      <CovidMetric
        title='Total confirmados'
        value={props.global.totalConfirmed}
      />
      <CovidMetric
        title='Nuevos fallecidos'
        value={props.global.newDeaths}
        variant='negative'
      />
      <CovidMetric
        title='Total fallecidos'
        value={props.global.totalDeaths}
        variant='negative'
      />
      <CovidMetric
        title='Nuevos recuperados'
        value={props.global.newRecovered}
        variant='positive'
      />
      <CovidMetric
        title='Total recuperados'
        value={props.global.totalRecovered}
        variant='positive'
      />
    </PanelContent>
  );
};

export default CovidPanelContent;

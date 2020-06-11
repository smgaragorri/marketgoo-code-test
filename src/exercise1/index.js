import React from 'react';
import GlobalData from '../repository/loadJsonData';
import { Panel, PanelHeader } from '@marketgoo/ola';
import CovidPanelContent from '../components/CovidPanelContent';

export default () => {
  return (
    <>
      <header>
        <h1 className='ola-title'>Exercise 1</h1>
      </header>
      <section>
        <Panel className='ola_panel'>
          <PanelHeader
            className='ola_panel-header'
            intro='Aquí mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19'
            title='Datos globales Covid-19'
          ></PanelHeader>
          <CovidPanelContent
            className='ola_panel-content grid'
            global={GlobalData()}
          />
        </Panel>
      </section>
    </>
  );
};

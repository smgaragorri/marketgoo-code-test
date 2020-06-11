import React, { useState, useEffect } from 'react';
import GlobalData from '../repository/loadAPIdata';
import { Panel, PanelHeader, Spinner, PanelContent } from '@marketgoo/ola';
import CovidPanelContent from '../components/CovidPanelContent';

export default () => {
  const [globalData, setGlobalData] = useState('');
  const [isError, setIsError] = useState('');

  useEffect(() => {
    GlobalData(setGlobalData, setIsError);
  }, []);

  return (
    <>
      <header>
        <h1 className='ola-title'>Exercise 2</h1>
      </header>
      <section>
        <Panel className='ola_panel'>
          <PanelHeader
            className='ola_panel-header'
            intro='Aquí mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19'
            title='Datos globales Covid-19'
          ></PanelHeader>
          {isError !== '' ? (
            <PanelContent>
              <p>Error: {isError}</p>
            </PanelContent>
          ) : globalData === '' ? (
            <PanelContent className='ola_panel-content loading'>
              <Spinner size='medium' />
            </PanelContent>
          ) : (
            <CovidPanelContent
              className='ola_panel-content grid'
              global={globalData}
            />
          )}
        </Panel>
      </section>
    </>
  );
};

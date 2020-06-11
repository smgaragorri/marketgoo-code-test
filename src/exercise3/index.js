import React, { useState, useEffect } from 'react';
import loadAPIDataWithCountries from '../repository/loadAPIDataWithCountries';
import { Panel, PanelHeader, Spinner, PanelContent } from '@marketgoo/ola';
import CovidPanelContent from '../components/CovidPanelContent';
import CovidCountryFilter from '../components/CovidCountryFilter';

export default () => {
  const [globalData, setGlobalData] = useState('');
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    loadAPIDataWithCountries(setGlobalData, setCountries, setIsError);
  }, []);

  const handleInputData = (data) => {
    for (const country of countries) {
      if (country.Country === data.name) {
        let countrySelected = {
          country: data.name,
          newConfirmed: country.NewConfirmed,
          totalConfirmed: country.TotalConfirmed,
          newDeaths: country.NewDeaths,
          totalDeaths: country.TotalDeaths,
          newRecovered: country.NewRecovered,
          totalRecovered: country.TotalRecovered,
        };
        setSelectedCountry(countrySelected);
        return;
      } else {
        setSelectedCountry(globalData);
      }
    }
  };

  return (
    <>
      <header>
        <h1 className='ola-title'>Exercise 3</h1>
      </header>
      <section>
        <Panel className='ola_panel'>
          <PanelHeader
            className='ola_panel-header'
            intro={
              selectedCountry.country === undefined
                ? 'Aquí mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19'
                : `Aquí mostramos información sobre el impacto de la enfermedad Covid-19 en ${selectedCountry.country}`
            }
            title={
              selectedCountry.country === undefined
                ? 'Datos globales Covid-19'
                : `Datos de ${selectedCountry.country} Covid-19`
            }
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
            <>
              <CovidCountryFilter
                global={globalData}
                countries={countries}
                handleInputData={handleInputData}
              />
              <CovidPanelContent
                className='ola_panel-content grid'
                data={selectedCountry ? selectedCountry : globalData}
              />
            </>
          )}
        </Panel>
      </section>
    </>
  );
};

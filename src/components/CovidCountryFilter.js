import React from 'react';
import { Select } from '@marketgoo/ola';

const CovidCountryFilter = (props) => {
  function handleCountry(ev) {
    props.handleInputData({
      name: ev.currentTarget.value,
    });
  }
  let countryListSelect = props.countries.map((country) => {
    return { label: country.Country, value: country.Country };
  });
  return (
    <figure>
      <Select
        onChange={handleCountry}
        options={[
          { label: 'Datos globales', value: 'Datos globales' },
          ...countryListSelect,
        ]}
      />
    </figure>
  );
};

export default CovidCountryFilter;

const ENDPOINT = 'https://api.covid19api.com/summary';

const loadAPIDataWithCountries = (handleData, handleCountries, handleError) => {
  fetch(ENDPOINT)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        handleError(response.statusText);
        return;
      }
    })
    .then((data) => {
      if (data) {
        let globalData = {
          newConfirmed: data.Global.NewConfirmed,
          totalConfirmed: data.Global.TotalConfirmed,
          newDeaths: data.Global.NewDeaths,
          totalDeaths: data.Global.TotalDeaths,
          newRecovered: data.Global.NewRecovered,
          totalRecovered: data.Global.TotalRecovered,
        };
        handleData(globalData);
        handleCountries(data.Countries);
      }
    })
    .catch((error) => {
      handleError(error.message);
    });
};

export default loadAPIDataWithCountries;

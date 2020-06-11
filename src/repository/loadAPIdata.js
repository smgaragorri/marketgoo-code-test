const ENDPOINT = 'https://api.covid19api.com/summary';

const loadAPIData = (handleData, handleError) => {
  fetch(ENDPOINT)
    .then((response) => {
      console.log(response);
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
      }
    })
    .catch((error) => {
      handleError(error.message);
    });
};

export default loadAPIData;

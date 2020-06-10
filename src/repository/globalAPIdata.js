const ENDPOINT = 'https://api.covid19api.com/summary';

const loadData = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let globalAPIdata = {
        newConfirmed: data.Global.NewConfirmed,
        totalConfirmed: data.Global.TotalConfirmed,
        newDeaths: data.Global.NewDeaths,
        totalDeaths: data.Global.TotalDeaths,
        newRecovered: data.Global.NewRecovered,
        totalRecovered: data.Global.TotalRecovered,
      };
    });
};

export default loadData;

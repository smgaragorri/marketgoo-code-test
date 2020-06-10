import data from '../data/covid19.json';

const loadData = () => {
  let globalData = {
    newConfirmed: data.Global.NewConfirmed,
    totalConfirmed: data.Global.TotalConfirmed,
    newDeaths: data.Global.NewDeaths,
    totalDeaths: data.Global.TotalDeaths,
    newRecovered: data.Global.NewRecovered,
    totalRecovered: data.Global.TotalRecovered,
  };
  return globalData;
};

export default loadData;

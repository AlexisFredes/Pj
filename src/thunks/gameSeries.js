import { Api } from '../api/Api';
import { setGameSeries, setPrices } from '../actions';

export const getGameSeriesByName = (name) => async (dispatch) => {
  const {amiibo: gameSeries} = await Api.gameSeries.byName(name);

  dispatch(setGameSeries(gameSeries));
};

export const onSetAllPrices = (prices) => (dispatch) => {

  dispatch(setPrices(prices));
};

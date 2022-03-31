import { combineReducers } from 'redux'
import { setGameSeries, setPrices } from './gameSeries'
import { onShoppingCar } from './shoppingCar'

export default combineReducers({
  gameSeries: setGameSeries,
  shoppingCar: onShoppingCar,
  prices: setPrices
})

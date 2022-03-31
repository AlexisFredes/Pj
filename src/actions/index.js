export const SET_GAME_SERIES = 'SET_GAME_SERIES'
export const SET_SHOPPPING_CAR = 'SET_SHOPPPING_CAR'
export const SET_PRICES = 'SET_PRICES'

export const setGameSeries = (res) => ({
  type: SET_GAME_SERIES,
  payload: res,
})

export const setShopingCar = (res) => ({
  type: SET_SHOPPPING_CAR,
  payload: res,
})

export const setPrices = (res) => ({
  type: SET_PRICES,
  payload: res,
})

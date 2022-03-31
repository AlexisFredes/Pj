import { SET_GAME_SERIES, SET_PRICES } from '../actions'

export const setGameSeries = (state = false, { type, payload }) => {
  let nextState = state
  if (type === SET_GAME_SERIES) {
    nextState = payload
  }

  return nextState
}

export const setPrices = (state = false, { type, payload }) => {
  let nextState = state
  if (type === SET_PRICES) {
    nextState = payload
  }

  return nextState
}

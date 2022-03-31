import { SET_SHOPPPING_CAR } from '../actions'

export const onShoppingCar = (state = false, { type, payload }) => {
  let nextState = state
  if (type === SET_SHOPPPING_CAR) {
    nextState = payload
  }

  return nextState
}

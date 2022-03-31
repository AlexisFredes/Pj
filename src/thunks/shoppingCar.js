import { setShopingCar } from '../actions';

export const onShoppingCar = (shoppingCar) => (dispatch) => {

  dispatch(setShopingCar(shoppingCar));
}
  
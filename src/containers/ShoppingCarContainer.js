import { connect } from 'react-redux';
import { ShoppingCar } from '../components/ShoppingCar';
import { onShoppingCar } from '../thunks/shoppingCar';

const mapStateToProps = ({shoppingCar}) => {
    return {shoppingCar};
}

const mapDispatchToProps = (dispatch) => ({
    onSetShoppingCar: (shoppingCar) => dispatch(onShoppingCar(shoppingCar))
});

export const ShoppingCarContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCar);

import { connect } from 'react-redux';
import { MaxWidthDialog } from '../components/shared/Dialog';
import { onShoppingCar } from '../thunks/shoppingCar';

const mapStateToProps = ({prices, shoppingCar}) => ({prices, shoppingCar});

const mapDispatchToProps = (dispatch) => ({
    onSetShoppingCar: (shoppingCar) => dispatch(onShoppingCar(shoppingCar))
});

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(MaxWidthDialog);

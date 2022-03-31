import { connect } from 'react-redux';
import { Home } from '../components/Home';
import { getGameSeriesByName, onSetAllPrices } from '../thunks/gameSeries';
import { onShoppingCar } from '../thunks/shoppingCar';

const mapStateToProps = ({gameSeries, shoppingCar, prices}) => {
    return {gameSeries, shoppingCar, prices};
}

const mapDispatchToProps = (dispatch) => ({
    onGetGameSeriesByName: (name) => dispatch(getGameSeriesByName(name)),
    onSetShoppingCar: (shoppingCar) => dispatch(onShoppingCar(shoppingCar)),
    onSetPrices: (prices) => dispatch(onSetAllPrices(prices))
});

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

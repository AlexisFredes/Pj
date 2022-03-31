import { connect } from 'react-redux';
import { Layout } from '../components/Layout';

const mapStateToProps = ({shoppingCar}) => {
    return {shoppingCar};
}

const mapDispatchToProps = (dispatch) => ({});

export const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

import { Routes, Route, Navigate } from 'react-router-dom'
import { HOME, HOME_DIALOG, ROOT, SHOPPING_CAR } from '../utils/constants/urls'
import { HomeContainer } from '../containers/HomeContainer'
import { LayoutContainer } from '../containers/LayoutContainer'
import { ShoppingCarContainer } from '../containers/ShoppingCarContainer'

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path={ROOT} element={<Navigate replace to={HOME} />} />
            <Route path={HOME} element={<LayoutContainer children={<HomeContainer />}/>}/>
            <Route path={HOME_DIALOG} element={<LayoutContainer children={<HomeContainer />}/>}/>
            <Route path={SHOPPING_CAR} element={<LayoutContainer children={<ShoppingCarContainer />}/>}/>
        </Routes>
    )
}

export default RouterConfig

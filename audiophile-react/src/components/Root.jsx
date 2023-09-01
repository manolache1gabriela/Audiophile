import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import ProductsByCategory from '../pages/ProductsByCategory';
import NoMatch from './NoMatch';
import CurrentProduct from '../pages/CurrentProduct';
import MenuModal from './MenuModal';
import CartModal from './CartModal';
import FavoriteModal from './FavoriteModal';

export default function Root() {
    const routes = [
        { path: '/', name: 'Home', Component: Home, exact: true },
        { path: '/product/:id', name: 'Current Product', Component: CurrentProduct, exact: false },
        { path: '/checkout', name: 'Checkout', Component: Checkout, exact: false },
        { path: '/category/:id', name: 'Category Name', Component: ProductsByCategory, exact: false },
        { path: '*', name: 'No match', Component: NoMatch, exact: false },
    ]

    return (
        <Router>
            <Fragment>
                <div className="app-container">
                    <NavigationBar />
                    <div className="content">
                        <Routes>
                            {routes.map(({ path, Component, exact }) => (
                                <Route key={path} path={path} exact={exact.toString()} element={<Component />}></Route>
                            ))}
                        </Routes>
                    </div>
                    <Footer />
                    <MenuModal />
                    <CartModal />
                    <FavoriteModal />
                </div>
            </Fragment>
        </Router>
    )
}

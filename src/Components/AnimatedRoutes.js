import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
// import SignUp from '../Pages/SignUp';
import Products from '../Pages/Products';
import Cart from '../Pages/Cart';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                {/* <Route path='/signup' element={<SignUp />} /> */}
                <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
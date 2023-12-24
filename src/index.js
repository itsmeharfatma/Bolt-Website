import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import SignUp from './Pages/SignUp';
import Products from './Pages/Products';
import Cart from './Pages/Cart'
import { ShopContextProvider } from './context/ShopContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "signup",
    element: <SignUp />,
  },

  {
    path: "products",
    element: <Products />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from './App';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
// import SignUp from './Pages/SignUp';
// import SignUp from './Pages/SignUp';
// import Products from './Pages/Products';
// import Cart from './Pages/Cart'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },

//   {
//     path: "signup",
//     element: <SignUp />,
//   },

//   {
//     path: "products",
//     element: <Products />,
//   },
//   {
//     path: "cart",
//     element: <Cart />,
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='products' element={<Products />} />
      <Route path='cart' element={<Cart />} />
      {/* <Route path='signup' element={<SignUp />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

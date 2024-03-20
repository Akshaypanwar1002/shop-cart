import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/cart-context';

import './index.css';
import Blog from './blog/Blog';
import Home from './Home/Home';
import Shop from './shop/Shop';
import About from './pages/About';
import Contact from './pages/Contact';


import 'swiper/css';
import App from './App';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';



import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Cart from './pages/Cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/shop", element: <Shop />
      },
      {
        path: "/about", element: <About />
      },
      {
        path: "/contact", element: <Contact />
      },
      {
        path: "/login", element: <Login />
      },
      {
        path: "/cart-page", element: <Cart />
      },



    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <CartProvider>

      <RouterProvider router={router} />
    </CartProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

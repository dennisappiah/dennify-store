import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Products provider
import ProductProvider from './context/ProductsContext';
// sideBarProvider
import SideBarProvider from './context/SideBarContext';
//cartsProvider
import CartProvider from './context/CartsContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CartProvider>
    <SideBarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SideBarProvider>
  </CartProvider>
  
);


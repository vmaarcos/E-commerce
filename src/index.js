import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import SidebarFinishProvider from './contexts/SidebarFinishContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SidebarFinishProvider>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
        <React.StrictMode>
                      <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
</SidebarFinishProvider>
);

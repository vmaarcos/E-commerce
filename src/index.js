import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './App';
import FormBuy from './Routes/FormBuy';
import Api from './Comp/Feed/Api'

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/product/:id",
            element: <FormBuy />
        },
    ])

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
);
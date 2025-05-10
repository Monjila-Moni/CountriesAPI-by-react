import {createRoot} from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App';
import CountryDetail from './components/CountryDetail'
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';


const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/:country',
            element: <CountryDetail/>
        }
    ]
}])

const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router}/>)

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// const root = createRoot(document.getElementById('root'));
// root.render(<App/>);
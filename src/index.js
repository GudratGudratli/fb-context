import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import router from './routes';
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Main",
    element: <Main />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    {/* <App /> */}

    <RouterProvider router={router}/>

  </React.StrictMode>
);

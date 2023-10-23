import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  defer
} from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: async ({ request, params }) => {
      const data =  fetch('https://example.com/api/data')
       return defer({
          results: data,
        })
    },
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import Lunch from './routes/Dishes';
import Beverage from './routes/Beverage';
import Dessert from './routes/Dessert';
import Ingredients from './routes/Overview';



const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "lunch",
        element: <Lunch />,
        children: [
          {
            path: "overview/:id",
            element: <Ingredients />
          }
        ]
      },
      {
        path: "beverage",
        element: <Beverage />,
        children: [
          {
            path: "overview/:id",
            element: <Ingredients />
          }
        ]
      },
      {
        path: "dessert",
        element: <Dessert />,
        children: [
          {
            path: "overview/:id",
            element: <Ingredients />,
          }
        ]
      },
    ]
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

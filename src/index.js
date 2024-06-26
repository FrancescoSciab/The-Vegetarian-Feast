import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import Root from "./routes/root";
import { HashRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./error-page";
// import ErrorPage from "./error-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/*" element={<Root />}></Route>
        <Route exact path="*" element={<ErrorPage />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

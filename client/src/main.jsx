import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./components/Map/Map";
import Login from "./pages/Login/Login";
import SignUpPro from "./pages/SignUpPro/SignUpPro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/login-Pro",
    element: <Login />,
  },
  {
    path: "/SignUpPro",
    element: <SignUpPro />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./components/Map/Map";
// import Login from "./pages/Login/Login";
// import SignUpPro from "./pages/SignUpPro/SignUpPro";
import ClientsRegistration from "./pages/ClientsRegistration";

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
    path: "/registration",
    element: <ClientsRegistration />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

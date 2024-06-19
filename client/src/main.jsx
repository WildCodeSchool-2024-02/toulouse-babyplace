import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./components/Map/Map";
import ClientsRegistration from "./pages/ClientsRegistration";
import SignIn from "./pages/SignIn/SignIn";
import SignInPro from "./pages/SignInPro/SignInPro";
import SignUpPro from "./pages/SignUpPro/SignUpPro";
import SignUp from "./pages/SignUp/SignUp";


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
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

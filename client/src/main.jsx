import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./components/Map/Map";
import SignIn from "./pages/SignIn/SignIn";
import SignInPro from "./pages/SignInPro/SignInPro";
import ChildcareCenterStructure from "./pages/SignUpPro/ChildcareCenterStructure/ChildcareCenterStructure";

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
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-in-pro",
    element: <SignInPro />,
  },
  {
    path: "/sign-up-pro",
    element: <ChildcareCenterStructure />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

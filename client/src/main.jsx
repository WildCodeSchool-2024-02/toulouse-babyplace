import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Layout from "./components/Layout/Layout";
import Map from "./components/Map/Map";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Help from "./pages/Help/Help";
import Profile from "./pages/Profile/Profile";
import Reservation from "./pages/Reservation/Reservation";
import ChildCareCenterProfile from "./pages/ChildCareCenterProfile/ChildCareCenterProfile";
import SignUpPro from "./pages/SignUpPro/SignUpPro";
import SignUpDone from "./pages/SignUp/SignUp-Done/SignUpDone";
import { SignUpProProvider } from "./context/SignUpPro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/childcare-center-profile",
    element: <ChildCareCenterProfile />,
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
    path: "/sign-up-pro",
    element: <SignUpPro />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-up-done",
    element: <SignUpDone />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SignUpProProvider>
      <RouterProvider router={router} />
    </SignUpProProvider>
  </React.StrictMode>
);

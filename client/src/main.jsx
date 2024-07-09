import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Layout from "./components/Layout/Layout";
import Map from "./components/Map/Map";
import SignIn from "./pages/SignIn/SignIn";
import SignInPro from "./pages/SignInPro/SignInPro";
import ChildcareCenterStructure from "./pages/SignUpPro/ChildcareCenterStructure/ChildcareCenterStructure";
import SignUp from "./pages/SignUp/SignUp";
import Help from "./pages/Help/Help";
import SignUpProLogin from "./pages/SignUpPro/SignUpProLogin/SignUpProLogin";
import SignUpProLocalisation from "./pages/SignUpPro/SignUpProLocalisation/SignUpProLocalisation";
import SignUpProImages from "./pages/SignUpPro/SignUpProImages/SignUpProImages";
import SignUpProRules from "./pages/SignUpPro/SignUpProRules/SignUpProRules";
import Profile from "./pages/Profile/Profile";
import Reservation from "./pages/Reservation/Reservation";
import ChildCareCenterProfile from "./pages/ChildCareCenterProfile/ChildCareCenterProfile";
import SignUpPro from "./pages/SignUpPro/SignUpPro";

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
    path: "/sign-in-pro",
    element: <SignInPro />,
  },
  {
    path: "/sign-up-pro",
    element: <SignUpPro />,
    children: [
      {
        path: "/sign-up-pro/structure",
        element: <ChildcareCenterStructure />,
      },
      {
        path: "/sign-up-pro/login",
        element: <SignUpProLogin />,
      },
      {
        path: "/sign-up-pro/localisation",
        element: <SignUpProLocalisation />,
      },
      {
        path: "/sign-up-pro/images",
        element: <SignUpProImages />,
      },
      {
        path: "/sign-up-pro/rules",
        element: <SignUpProRules />,
      },
    ],
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

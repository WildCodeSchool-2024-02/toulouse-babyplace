import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Layout from "./components/Layout/Layout";
import Map from "./components/Map/Map";
import SignIn from "./pages/SignIn/SignIn";
import SignInPro from "./pages/SignInPro/SignInPro";
import SignUp from "./pages/SignUp/SignUp";
import Help from "./pages/Help/Help";
import Profile from "./pages/Profile/Profile";
import Reservation from "./pages/Reservation/Reservation";
import ChildCareCenterPage from "./pages/ChildCareCenterProfile/ChildCareCenterPage";
import SignUpPro from "./pages/SignUpPro/SignUpPro";
import SignUpDone from "./pages/SignUp/SignUp-Done/SignUpDone";
import { SignUpProProvider } from "./context/SignUpPro";
import Search from "./pages/Search/Search";
import PersonalPage from "./pages/PersonalPage/PersonalPage";
import ProfilePro from "./pages/ProfilePro/ProfilePro";

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
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  { path: "/personal-profile", element: <PersonalPage /> },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile-pro",
    element: <ProfilePro />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/childcare-center-page",
    element: <ChildCareCenterPage />,
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

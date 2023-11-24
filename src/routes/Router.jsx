import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../components/navbar/Header";
import SideBar from "../components/navbar/SideBar";
import { Addons, Dashboard, Faq, Perks, Support } from "../pages";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="flex items-center">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/addons",
        element: <Addons />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/perks",
        element: <Perks />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

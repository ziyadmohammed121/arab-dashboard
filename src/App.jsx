import React from "react";
import Header from "./components/navbar/Header";
import SideBar from "./components/navbar/SideBar";
import Dashboard from "./pages/Dashboard";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/Router";

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;

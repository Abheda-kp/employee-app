import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import "./layout.css";
import React, { Suspense } from "react";
// const LazyComponent = React.lazy(() => import("./loading.ts"));
const Layout = () => {
  if (localStorage.getItem("token") === "") return <Navigate to="/login" />;

  return (
    <div className="layout">
      <Navbar />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense> */}

      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

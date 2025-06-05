import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import "./layout.css";
const Layout = () => {
   if(localStorage.getItem("token")==="") return <Navigate to="/login" />;
   
  return (
    <div className="layout">
      <Navbar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

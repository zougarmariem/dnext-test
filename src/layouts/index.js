import React from "react";
import Sider from "../components/Sider";
import Dashboard from "../pages/Dashboard";

const Layout = () => {
  return (
    <div className="layout">
      <Sider />
      <Dashboard />
    </div>
  );
};

export default Layout;

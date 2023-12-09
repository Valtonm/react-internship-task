import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Layout.css";

import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      <main className="Main">
        <Header />
        <div className="Outlet">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
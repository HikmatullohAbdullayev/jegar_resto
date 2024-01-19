import "./layout.scss";
import React from "react";
import Sidebar from "./sidebar/sidebar";
import Home from "./main-layout/pages/home/Home";
import Header from "./header/header";
import Orders from "./orders/Orders";
import Footer from "./footer/Footer";

function Layout(props) {
  return (
    <div className="layout">
      <div className="sidebar_box">
        <Sidebar />
      </div>
      <div className="home_center">
        <header className="header_box">
          <Header />
        </header>
        <div className="home_box">
          <Home />
        </div>

        <footer className="footer_box">
          <Footer />
        </footer>
      </div>
      <div className="orders_box">
        <Orders />
      </div>
    </div>
  );
}

export default Layout;

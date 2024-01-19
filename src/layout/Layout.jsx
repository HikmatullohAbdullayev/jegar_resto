// import "./heade.scss"
import React from 'react';
import Sidebar from "./sidebar/sidebar";
import Home from "./main-layout/pages/home/Home";
import Header from "./header/header";
import Orders from './orders/Orders';
import Footer from "./footer/Footer"


function Layout(props) {
    return (
        <div>
            <Sidebar/>
            <Header/>
            <Home/>
            <Orders/>
            <Footer/>
        </div>
    );
}

export default Layout;
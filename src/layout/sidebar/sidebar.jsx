import "./sidebar.scss"
import React from 'react';
import LogoIcon from "../../assets/icon/LogoIcon"
import HomeIcon from "../../assets/icon/HomeIcon";
import DiscountIcon from "../../assets/icon/DiscountIcon"
import DashboardIcon from "../../assets/icon/DashboardIcon"
import NotificationIcon from "../../assets/icon/NotificationIcon"
import MessaageIcon from "../../assets/icon/MessageIcon"
import SettingIcon from "../../assets/icon/SettingIcon"
import LogOutIcon from "../../assets/icon/LogOutIcon"




function Sidebar(props) {

    

        return (
            <>
           <div className="sidebar_box">
           <a className="logo_link" href="#">
                <span className="logo"><LogoIcon/></span>
            </a>
            <div className="sidebar_icons">
                <span className="icon_pading"><HomeIcon/></span>
                <span className="icon_pading"><DiscountIcon/></span>
                <span className="icon_pading"><DashboardIcon/></span>
                <span className="icon_pading"><MessaageIcon/></span>
                <span className="icon_pading"><NotificationIcon/></span>
                <span className="icon_pading"><SettingIcon/></span>
            </div>
                <button className="icon_logout"><LogOutIcon/></button>

           </div>
            </>
        
    );
}


export default Sidebar;
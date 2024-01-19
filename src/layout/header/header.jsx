import "./header.scss"
import SearchIcon from "../../assets/icon/SearchIcon"
import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <div className="header__top">
                <div className="top_content">
                    <h1 className="header_title">Jaegar Resto</h1>
                    <p className="header_date">Tuesday, 2 Feb 2021</p>
                </div>
                <form className="header_form" >
                    <span className="search"><SearchIcon/></span>
                    <input className="input" type="text" name="text" id="text" placeholder="Search for food, coffe, etc.." />
                </form>
            </div>
            <div className="header__tab">
                <a className="tab_link" href="#">Hot Dishes</a>
                <a className="tab_link" href="#">Cold Dishes</a>
                <a className="tab_link" href="#">Soup</a>
                <a className="tab_link" href="#">Grill</a>
                <a className="tab_link" href="#">Appetizer</a>
                <a className="tab_link" href="#">Dessert</a>
            </div>

        </div>
    );
}

export default Header;
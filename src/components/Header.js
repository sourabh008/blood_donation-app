import React from 'react';
import logo from "./images/bloodimg.png";
import images from "./images/images.jpeg";
import "../App.css";
function Header() {
    return (
        <div className="header">
            <img src={logo} className="logo"/>
            
            <h1>Life Saver</h1>

        </div>
    )
}

export default Header

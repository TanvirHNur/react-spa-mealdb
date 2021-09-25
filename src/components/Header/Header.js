import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="nav">
            <img src={logo} alt=""></img>
            <a href="/">Home</a>
            <a href="/">Menu</a>
            <a href="/">Orders</a>
            <a href="/">Delivery</a>
        </div>
    );
};

export default Header;
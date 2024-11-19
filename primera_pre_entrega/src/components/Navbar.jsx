import React from 'react';
import Logo from "./Logo";
import CartWidget from './CartWidget';
import "./navbar.css";


function Navbar() {
    return (
        <div className="navbar">
            <Logo/>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Cofee</a>
                </li>
                <li className="navbar-item">
                    <a href="">Salado</a>
                </li>
                <li className="navbar-item">
                    <a href="">Dulce</a>
                </li>
            </ul>   
            <CartWidget/>     
        </div>
    )
}

export default Navbar;
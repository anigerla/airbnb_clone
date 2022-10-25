import React from "react";
import './Header.css';
import logo from "../images/airbnb_logo.png";

export default function Header() {
    return (
        <nav>
            <img src={logo}></img>
        </nav>
    )
}
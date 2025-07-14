import { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from "../../assets/Pokemart-logo.png"

export default function Navbar() 
{
    return (
        <div className="navigation-bar">
            <img src={logo} className="logo"></img>
            <div className="nav-options">
                <Link to="/">Home</Link>
                <Link to="store">Store</Link>
            </div>
        </div>
    )
}
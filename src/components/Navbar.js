import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <div className='navbar-brand'>
                Note App
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' exact to='/'>Main</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink className='nav-link' to='/about'>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

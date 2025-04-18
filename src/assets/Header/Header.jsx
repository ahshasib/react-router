import React from 'react'
import { NavLink } from 'react-router'
import "./Header.css"
const Header = () => {
  return (
    <div>
        <h1>this is my header</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/product">Product</NavLink>
        </nav>
    </div>
  )
}

export default Header
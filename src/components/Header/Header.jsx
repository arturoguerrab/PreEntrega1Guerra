import React from 'react'

import BrandLogo from "../BrandLogo/BrandLogo"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"

import "./Header.css"


const Header = () => {
  
  return (
    <header>
        <div className="header">
            <BrandLogo/>
            <NavBar/>
            <CartWidget/>
        </div>
    </header>
  )
}

export default Header
import React from 'react'

import { NavLink } from "react-router-dom"

import NavItem from "../NavItem/NavItem"

import "./NavBar.css"


const Navbar = () => {
  return (
    <nav>
        <ul className="NavContainer">
          <NavLink to='/' className={({isActive})=> isActive ? 'Linkactive' : 'LinkNavbar'}>
            <NavItem title="All"/>
          </NavLink>
          <NavLink to='/category/shrine' className={({isActive})=> isActive ? 'Linkactive' : 'LinkNavbar'}>
            <NavItem title="Shrine"/>
          </NavLink>
          <NavLink to='/category/overose' className={({isActive})=> isActive ? 'Linkactive' : 'LinkNavbar'}>
            <NavItem title="Overose"/>
          </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
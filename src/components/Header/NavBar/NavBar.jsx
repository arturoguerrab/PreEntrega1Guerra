import React from 'react'

import { NavLink } from "react-router-dom"

import NavItem from "../NavItem/NavItem"


const Navbar = () => {
  return (
    <nav className="hidden col-span-6 col-start-4 lg:block">
        <ul className='flex justify-around'>
        <NavLink to='/' className={({isActive})=> isActive ? 'text-[#e574f0]' : 'text-[#faebd7] hover:text-[#996ec2]'}>
                <NavItem title="All"/>
              </NavLink>
              <NavLink to='/category/shrine' className={({isActive})=> isActive ? 'text-[#e574f0]' : 'text-[#faebd7] hover:text-[#996ec2]'}>
                <NavItem title="Shrine"/>
              </NavLink>
              <NavLink to='/category/overose' className={({isActive})=> isActive ? 'text-[#e574f0]' : 'text-[#faebd7] hover:text-[#996ec2]'}>
                <NavItem title="Overose"/>
              </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'

import { useState, useEffect } from "react";
import { MobileNav,IconButton} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom'

import BrandLogo from "./BrandLogo/BrandLogo"
import CartWidget from "./CartWidget/CartWidget"
import NavBar from "./NavBar/NavBar"
import NavItem from './NavItem/NavItem'


const Header = () => {

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {

    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
  
    <div className="w-screen fixed bg-black">

        <div className="sm:w-10/12 mx-auto px-4 pt-2 pb-1 grid grid-cols-12 items-center">
            <BrandLogo/>
            <NavBar/>
            <CartWidget/>
            <IconButton
            variant="text"
            className="col-span-2 col-start-1 order-first hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            >
            {openNav ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            )}
            </IconButton>
        </div>

        <MobileNav open={openNav}>
          <ul className="sm:w-10/12 mx-auto px-4 pt-3 pb-4">
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
        </MobileNav>

    </div>
  );
}

export default Header

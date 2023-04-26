import React from 'react'

import { Link } from "react-router-dom"

import LogoWhimsy from "../../../assets/icons/logowhimsy.gif"


const BrandLogo = () => {
    return (    
        <Link className='col-start-6 col-span-2 flex justify-center lg:col-start-1' to='/'>
            <img src={LogoWhimsy} alt="Logo Whimsy"/>
        </Link>  
    )
}

export default BrandLogo
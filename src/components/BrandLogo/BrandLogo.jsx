import React from 'react'

import { Link } from "react-router-dom"

import LogoWhimsy from "../../assets/icons/logowhimsy.gif"


const BrandLogo = () => {
    return (    
        <Link to='/'>
            <img src={LogoWhimsy} alt="Logo Whimsy"/>
        </Link>  
    )
}

export default BrandLogo
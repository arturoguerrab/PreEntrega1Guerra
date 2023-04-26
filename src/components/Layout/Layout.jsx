import React from 'react'

import Header from "../Header/Header"


const Layout = ({ children }) => {
    return (
        <div className='bg-gray-200'>
            <Header/>

            {children}
        </div>
    )
}

export default Layout
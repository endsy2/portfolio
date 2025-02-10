import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const RootLayOut = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayOut

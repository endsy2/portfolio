import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const RootLayOut = () => {
    return (
        <div className='mx-10 lg:mx-11'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayOut

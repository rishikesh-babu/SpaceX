import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar />
            <main className='pt-[4.5rem]'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
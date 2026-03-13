import React from 'react'
import Navbar from '../sections/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout
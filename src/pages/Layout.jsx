import React from 'react'
import Navbar from '../sections/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/Footer/Footer'
import BookingModal from '../sections/BookingModal/BookingModal'

const Layout = () => {
  return (
    <>
    <Navbar />
    <main>
        <Outlet />
        <BookingModal />
    </main>
    <Footer />
    </>
  )
}

export default Layout
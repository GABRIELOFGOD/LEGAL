import React from 'react'
import Header from './Headingn'
import { Outlet } from 'react-router-dom'
import Footer from './Footing'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
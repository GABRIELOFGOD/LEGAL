import React from 'react'
import Header from './Headingn'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footing'

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
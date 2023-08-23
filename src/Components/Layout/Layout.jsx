
import React, { Children } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Router from '../Router/Router'

const Layout = () => {
  return (
    <>
     <Header/>
     <Router>
     {Children}
     </Router>
     <Footer/>

    </>
  )
}

export default Layout
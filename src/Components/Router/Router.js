
import React from 'react'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Career from '../Pages/Career/Career'
import Course from '../Pages/Course/Course'
import DigitalProduct from '../Pages/DigitalProduct/DigitalProduct'
import Price from '../Pages/Price/Price'
import ErorrPage from '../Pages/ErorrPage/ErorrPage'
import ProductDetail from '../Pages/DigitalProduct/DigitalProduct'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'


import { Route, Routes } from 'react-router-dom'
const Router = () => {
  return (
    <>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/career' element={<Career/>} />
            <Route path='/price' element={<Price/>} />
            <Route path='/course' element={<Course/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/digitalproduct' element={<DigitalProduct/>} />
            <Route path='/course/:id' element={<ProductDetail/>} />
            <Route path='*' element={<ErorrPage/>} />

      </Routes>
    </>
  )
}

export default Router
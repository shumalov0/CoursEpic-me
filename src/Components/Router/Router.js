
import React from 'react'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Career from '../Pages/Career/Career'
import Course from '../Pages/Course/Course'
import DigitalMarketing from '../Pages/DigitalMarketing/DigitalMarketing'
import FaceToFace from '../Pages/1:1/FaceToFace'
import Folowers from '../Pages/Folowers/Folowers'
import Live from '../Pages/Live/Live'
import Price from '../Pages/Price/Price'
import ErorrPage from '../Pages/ErorrPage/ErorrPage'
import ProductDetail from '../Pages/ProductDetail/ProductDetail'
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
            <Route path='/digitalmarketing' element={<DigitalMarketing/>} />
            <Route path='/live' element={<Live/>} />
            <Route path='/facetoface' element={<FaceToFace/>} />
            <Route path='/folowers' element={<Folowers/>} />
            <Route path='/course/:id' element={<ProductDetail/>} />
            <Route path='*' element={<ErorrPage/>} />

      </Routes>
    </>
  )
}

export default Router
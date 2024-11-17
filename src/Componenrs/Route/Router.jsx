import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Book from '../../Pages/Book/Book'
import Courses from '../../Pages/Courses/Courses'
import Donate from '../../Pages/Donate/Donate'
import Register from '../../Pages/Register/Register'
import Afterregister from '../../Pages/After-Register-page/Afterregister'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Book/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/after-register' element={<Afterregister/>}/>
      </Routes>
    </>
  )
}

export default Router

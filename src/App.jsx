import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componenr/Home'
import Login from './Componenr/Createblogs/Login'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} / >
       <Route path="/login" element={<Login/>} / >
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

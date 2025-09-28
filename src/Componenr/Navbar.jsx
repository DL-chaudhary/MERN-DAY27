import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="navbar">
    <a href="#">Home</a>
   <Link to="/login"> <button className="add-btn">Add</button></Link>
  </div>
    </>
  )
}

export default Navbar
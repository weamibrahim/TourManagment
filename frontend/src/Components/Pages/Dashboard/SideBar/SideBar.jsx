import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'
function SideBar() {
  return (
    <div className='d-flex flex-column align-items-center sideBar'>
    <NavLink to="/dashboard" className="text-decoration-none text-black mx-3 my-2">Dashboard</NavLink>
    <NavLink to="/dashboard/tours" className="text-decoration-none text-black mx-3 my-2">Tours</NavLink>
    <NavLink to="/dashboard/reviews" className="text-decoration-none text-black mx-3 my-2">Reviews</NavLink>
    <NavLink to="/dashboard/users" className="text-decoration-none text-black mx-3 my-2">Users</NavLink>
</div>
  )
}

export default SideBar
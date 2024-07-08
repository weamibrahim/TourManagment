import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
function Dashboard() {


  return (
    <div className='d-flex justify-content-around align-items-center'>
        <NavLink to="/dashboard/tours" className="btn btn-info">Tours</NavLink>
        <NavLink to="/dashboard/reviews" className="btn btn-primary">Reviews</NavLink>
        <NavLink to="/dashboard/users" className="btn btn-success">Users</NavLink>
    </div>
  )
}

export default Dashboard
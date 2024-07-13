import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import SideBar from './SideBar/SideBar';
import './Dashboard.css'
function Dashboard() {


  return (
    <div className='d-flex justify-content-between'>
    <SideBar/>
    <div className=' bgDashboard '>
      
    </div>
    </div>
  )
}

export default Dashboard
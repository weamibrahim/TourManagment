import React from 'react'
import SideBar from '../Components/Pages/Dashboard/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='d-md-flex justify-content-around '>

<SideBar />
<Outlet />

    </div>
  )
}

export default Layout
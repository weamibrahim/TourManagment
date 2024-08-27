import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import { MdDashboard } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { MdRateReview } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { useLogin } from "../../../../Contexts/LoginContext";
import { useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function SideBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {setIsLogin,IsLogin} = useLogin();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setIsLogin(false);
    navigate('/login');

  }

  return (
    <>
      <div className={`sideBar ${isOpen ? 'open' : ''}`}>
        <div className='d-flex justify-content-between align-items-center  '>
      
       <NavLink to="/" className="text-decoration-none text-black mx-3 my-2 fs-2 fw-bold">TravelTrails</NavLink>
        </div>
        <div className='fs-5 bg-body-secondary rounded-3 px-3 py-2 d-flex align-items-center'>
          <MdDashboard />
          <NavLink to="/dashboard" className="text-decoration-none text-black mx-3 my-2">Dashboard</NavLink>
        </div>
        <div className='fs-5 px-3 py-2 d-flex align-items-center'>
          <GiJourney />
          <NavLink to="/dashboard/tours" className="text-decoration-none text-black mx-3 my-2">Tours</NavLink>
        </div>
        <div className='fs-5 px-3 py-2 d-flex align-items-center'>
          <MdRateReview />
          <NavLink to="/dashboard/reviews" className="text-decoration-none text-black mx-3 my-2">Reviews</NavLink>
        </div>
        <div className='fs-5 px-3 py-2 d-flex align-items-center'>
          <HiUsers />
          <NavLink to="/dashboard/users" className="text-decoration-none text-black mx-3 my-2">Users</NavLink>
        </div>
        <div className='fs-5 px-3 py-2 d-flex align-items-center'>
          <VscPreview />
          <NavLink to="/dashboard/bookings" className="text-decoration-none text-black mx-3 my-2">Bookings</NavLink>
        </div>

        <div className='fs-5 px-3 py-2 d-flex align-items-center mt-auto'>
        
          <button className="nav-link" onClick={handleLogout}><IoIosLogOut className="fs-4 me-2" /> Logout</button>
        </div>
      </div>

      <button className="sideBar-toggle " onClick={toggleSidebar}>
        {isOpen ? <IoMdClose /> : <CiMenuBurger />}
      </button>
    </>
  );
}

export default SideBar;

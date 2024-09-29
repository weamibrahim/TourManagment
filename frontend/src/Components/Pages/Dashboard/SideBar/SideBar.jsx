import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { MdDashboard } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { MdRateReview } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { useLogin } from "../../../../Contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
function SideBar() {
  const navigate = useNavigate();
  const { setIsLogin, IsLogin } = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <>
      <div>
        <div className="d-md-none d-block">
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            className="rounded-2 border-0 m-2"
          >
            <CiMenuBurger size={40} className="p-1" />
          </button>

          <div
            class="offcanvas offcanvas-start w-75"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
           <motion.svg
              className="wavy-background "
              viewBox="0 0 500 150"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <motion.path
                d="M0,100 C150,200 300,0 500,100 L500,00 L0,0 Z"
                fill="#6c63ff"
              />
            </motion.svg>
            <div class="offcanvas-header">
              <div className="d-flex justify-content-between align-items-center  ">
                <NavLink
                  to="/"
                  className="text-decoration-none text-black mx-3 my-1 fs-2 fw-bold"
                >
                  TravelTrails
                </NavLink>
              </div>
              <button
                type="button"
                class="btn-close "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div className="fs-5 bg-body-secondary rounded-3 px-3 py-2 d-flex align-items-center my-1">
                <MdDashboard />
                <NavLink
                  to="/dashboard"
                  className="text-decoration-none text-black mx-3 mt-2 "
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <GiJourney />
                <NavLink
                  to="/dashboard/tours"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Tours
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <MdRateReview />
                <NavLink
                  to="/dashboard/reviews"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Reviews
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <HiUsers />
                <NavLink
                  to="/dashboard/users"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Users
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <VscPreview />
                <NavLink
                  to="/dashboard/bookings"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Bookings
                </NavLink>
              </div>

              <div className="fs-5 px-3 py-2 d-flex align-items-center mt-auto">
                <button className="nav-link" onClick={handleLogout}>
                  <IoIosLogOut className="fs-4 my-5" /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-md-block">
        <div>

            <div>
            <motion.svg
              className=""
              viewBox="0 0 500 200"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <motion.path
                d="M0,100 C150,200 300,0 500,100 L500,00 L0,0 Z"
                fill="#6c63ff"
              />
            </motion.svg>
              <div className="d-flex justify-content-between align-items-center">
                
                <NavLink
                  to="/"
                  className="text-decoration-none text-black mx-3 my-2 fs-2 fw-bold"
                >
                  TravelTrails
                </NavLink>
              </div>
             
            </div>
            
              <div className="fs-5 bg-body-secondary rounded-3 px-3 py-2 d-flex align-items-center my-4">
                <MdDashboard />
                <NavLink
                  to="/dashboard"
                  className="text-decoration-none text-black mx-3 mt-2 "
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <GiJourney />
                <NavLink
                  to="/dashboard/tours"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Tours
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <MdRateReview />
                <NavLink
                  to="/dashboard/reviews"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Reviews
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <HiUsers />
                <NavLink
                  to="/dashboard/users"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Users
                </NavLink>
              </div>
              <div className="fs-5 px-3 py-2 d-flex align-items-center">
                <VscPreview />
                <NavLink
                  to="/dashboard/bookings"
                  className="text-decoration-none text-black mx-3 my-2"
                >
                  Bookings
                </NavLink>
              </div>

              <div className="fs-5 px-3 py-2 d-flex align-items-center mt-auto">
                <button className="nav-link" onClick={handleLogout}>
                  <IoIosLogOut className="fs-4 my-5" /> Logout
                </button>
              </div>
            </div>
            </div>
          </div>
         
        
  
    </>
  );
}

export default SideBar;

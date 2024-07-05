import React from 'react'
import './profile.css'
import { NavLink } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
function profile() {

    let user=JSON.parse(localStorage.getItem("user"));
  return (
    <>
        <Helmet>
            <title>Profile</title>
        </Helmet>
    <div className="pt-4 area" style={{ textAlign: "center", height: "1000px " }}>
    <div className="container " style={{ margin: " 0 auto", maxWidth: " 600px" }}>

        <div className="pic" >

            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" height="200" width="200" />

        </div>

    </div>

    <div style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: " 700px" }}>
            <div className=" justify-content-center align-items-center" >
                <div className="row ">

                    <div className="pb-5 col-lg-12 align-items-center justify-content-center">
                        <div className=" border-0 shadow p-0 mb-5 bg-body-tertiary rounded">
                            <div className="card-body m-2 " >
                                <div className="row mb-3 ">
                                  
                                    <div className="col-sm-10 text-secondary m-auto">
                                        <span className="pt-2 form-control mt-3" style={{ border: "2px solid red   !important" }}>{user.name}</span>
                                    </div>

                                </div>
                               
                                <div className="row mb-3">
                                    
                                    <div className="col-sm-10 text-secondary m-auto my-2">
                                        <span className="pt-2 form-control" style={{ border: "2px solid red   !important" }}>{user.email}</span>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center ">
                                    <button className="btn btn-info mb-4" ><NavLink className="text-white text-decoration-none " to={'/updateprofile'}> <FaRegEdit /></NavLink>

                                    </button>
                                </div>

                            </div>
                            
                        </div>

                    </div>
                </div>
              
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default profile
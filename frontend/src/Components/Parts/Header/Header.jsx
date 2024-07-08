import {NavLink} from "react-router-dom"
import { LuPlane } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import "./Header.css"
function Header() {
const Islogin = localStorage.getItem('accessToken');
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.reload();
  }
    return (
        <div>
            <div className="header"></div>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container" id="navbarSupportedContent">
        <div >
        <LuPlane className="fs-2" />
        </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          
          <NavLink to="/" className="nav-link active" aria-current="page" ><IoIosHome  className="fs-4 mx-2 "/>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tours" className="nav-link" >Tours</NavLink>
        </li>
        {Islogin?(
          <>
          <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
      </li>
           <li className="nav-item">
          <NavLink to="/profile" className="nav-link" ><IoPersonOutline  className="fs-5"/></NavLink>
      </li>
           <li className="nav-item">
           <button className="nav-link" onClick={handleLogout}><IoIosLogOut className="fs-4" /></button>
       </li>
       
      
       </>
        ):(
          <>
          <li className="nav-item">
          <NavLink to="/register" className="nav-link" >Register</NavLink>
      </li>
      <li className="nav-item">
          <NavLink to="/login" className="nav-link" >Login</NavLink>
      </li>
     
      </>
        )}
       
       
        </ul>
         
     
    </div>
  </div>
</nav>
        </div>
    );
}   

export default Header;
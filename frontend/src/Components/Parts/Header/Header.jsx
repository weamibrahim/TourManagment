import {NavLink} from "react-router-dom"
import { LuPlane } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import "./Header.css"
import { useLogin } from "../../../Contexts/LoginContext";
function Header() {

  const {setIsLogin,IsLogin} = useLogin();
const UserDate= JSON.parse(localStorage.getItem('user'));
const userRole= UserDate ? UserDate.role : null;
const isAdmin = userRole === "admin";
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setIsLogin(false);
  }
    return (
        <div >
            <div className="header"></div>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container" id="navbarSupportedContent">
        <div >
        <LuPlane className="fs-2" />
        <span className=" fs-3 mx-2" style={{  fontFamily: "Sofia"}}>  <NavLink to="/" className="text-decoration-none text-dark" aria-current="page" >TravelTrails</NavLink></span>
        </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4" style={{  fontFamily: "Sofia"}}>
        
        <li className="nav-item">
          <NavLink to="/tours" className="nav-link" ><GiJourney  className="fs-3 mx-2"/>Tours</NavLink>
        </li>
        {IsLogin?(
          <>
         
          {isAdmin?(
<>
          <li className="nav-item">
            
          <NavLink to="/dashboard" className="nav-link" > <MdDashboard  className="fs-4 mx-1"/>Dashboard</NavLink>
      </li>
      <li className="nav-item">
          <NavLink to="/profile" className="nav-link" ><IoPersonSharp  className="fs-4 mx-1"/> Profile</NavLink>
      </li>
           <li className="nav-item">
           <button className="nav-link" onClick={handleLogout}><IoIosLogOut className="fs-4" /></button>
       </li></>
      
          ):(
<>
<li className="nav-item">
          <NavLink to="/profile" className="nav-link" ><IoPersonSharp  className="fs-4 mx-1"/> Profile</NavLink>
      </li>
           <li className="nav-item">
           <button className="nav-link" onClick={handleLogout}><IoIosLogOut className="fs-4" /></button>
       </li></>
          
          )}
          
       
      
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
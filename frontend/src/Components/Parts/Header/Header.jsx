import { NavLink } from "react-router-dom";
import { LuPlane } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import "./Header.css";
import { useLogin } from "../../../Contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { IoIosBookmark } from "react-icons/io";
function Header() {
  const navigate = useNavigate();
  const { setIsLogin, IsLogin } = useLogin();
  const UserDate = JSON.parse(localStorage.getItem("user"));
  const userRole = UserDate ? UserDate.role : null;
  const isAdmin = userRole === "admin";
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsLogin(false);
    navigate("/login");
  };
  return (
    <div>
      <div className="header"></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse container"
            id="navbarSupportedContent"
          >
            <div>
              <LuPlane className="fs-2" />
              <span className=" fs-3 mx-2" style={{ fontFamily: "Sofia" }}>
                {" "}
                <NavLink
                  to="/"
                  className="text-decoration-none text-dark"
                  aria-current="page"
                >
                  TravelTrails
                </NavLink>
              </span>
            </div>
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4"
              style={{ fontFamily: "Sofia" }}
            >
              <li className="nav-item">
                <NavLink to="/tours" className="nav-link">
                  <GiJourney className="fs-3 mx-1" />
                  Tours
                </NavLink>
              </li>
              {IsLogin ? (
                <>
                  {isAdmin ? (
                    <>
                      <li className="nav-item">
                        <NavLink to="/dashboard" className="nav-link">
                          
                          <MdDashboard className="fs-4 mx-1" />
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/profile" className="nav-link">
                          <IoPersonSharp className="fs-4 mx-1" /> Profile
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <button className="nav-link" onClick={handleLogout}>
                          <IoIosLogOut className="fs-4" />
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink to="/profile" className="nav-link">
                          <IoPersonSharp className="fs-4 mx-1" /> Profile
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/yourbooking" className="nav-link">
                          <IoIosBookmark className="fs-4" />
                          My Booking
                        </NavLink>
                      </li>
                      <li className="nav-item">
                       <NavLink to="/favorite" className="nav-link">
                       <svg
                        className=""
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#f8f9fa"
                          viewBox="0 0 24 24"
                          stroke="red" 
                          strokeWidth="1.5" 
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "red",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          />
                          </svg>
                       </NavLink>
                       
                      </li>
                      <li className="nav-item">
                        <button className="nav-link" onClick={handleLogout}>
                          <IoIosLogOut className="fs-4" />
                        </button>
                      </li>
                    </>
                  )}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link mx-2">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link mx-2">
                      Login
                    </NavLink>
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

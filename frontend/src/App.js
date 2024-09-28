import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useLocation,NavLink } from "react-router-dom";
import Header from './Components/Parts/Header/Header';
import Footer from './Components/Parts/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Tours from './Components/Pages/Tours/Tours';
import TourDetails from './Components/Pages/TourDetails/TourDetails';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import YourBooking from './Components/Pages/YourBooking/YourBooking';
import ResultOfSearch from './Components/Pages/ResultOfSearch/ResultOfSearch';

import Profile from './Components/Pages/Profile/profile';
import UpdateProfile from './Components/Pages/UpdateProfile/UpdateProfile';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import AllTour from './Components/Pages/Dashboard/Tours/AllTour/AllTour';
import CreateTour from './Components/Pages/Dashboard/Tours/CreateTour/CreateTour';
import UpdateTour from './Components/Pages/Dashboard/Tours/UpdateTour/UpdateTour';
import AllReviews from './Components/Pages/Dashboard/Reviews/AllReview/AllReview';
import AllUser from './Components/Pages/Dashboard/Users/AllUser/AllUser';
import Favorite from './Components/Pages/Favorite/Favorite';
import  AllBooking from './Components/Pages/Dashboard/AllBooking/AllBooking';
import NotFound from './Components/Pages/NotFound/NotFound';
import { LoginProvider } from './Contexts/LoginContext';
import { TokenProvider } from './Contexts/TokenContext';
import { TourProvider } from './Contexts/TourContext';
import {FavoriteProvider} from './Contexts/FavoriteContext'
import { AnimatePresence } from 'framer-motion';

//import { useState ,useEffect} from "react";

function App() {
  const loggedIn = localStorage.getItem('accessToken') !== null;
  const UserDate= JSON.parse(localStorage.getItem('user'));
  const userRole= UserDate ? UserDate.role : null;
  const isAdmin = userRole === "admin";
  const location = useLocation();  
  const isDashboard = location.pathname.startsWith('/dashboard');
  return (
    <div className="App">
      <LoginProvider>
      <TokenProvider>
      <TourProvider>
        <FavoriteProvider>
      {!isDashboard && <Header />}
<AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
        
        {isAdmin?(
  <>
          <Route path="/dashboard" element={loggedIn ? <Dashboard />: <Navigate to="/login" />} />
          <Route path="/dashboard/tours" element={loggedIn ? <AllTour />: <Navigate to="/login" />} />
          <Route path="/dashboard/tours/create" element={loggedIn ? <CreateTour />: <Navigate to="/login" />} />
          <Route path="/dashboard/tours/update/:id" element={loggedIn ? <UpdateTour />: <Navigate to="/login" />} />
          <Route path="/dashboard/reviews" element={loggedIn ? <AllReviews />: <Navigate to="/login" />} />
          <Route path="/dashboard/users" element={loggedIn ? <AllUser />: <Navigate to="/login" />} />
          <Route path="/dashboard/bookings" element={loggedIn ? <AllBooking />: <Navigate to="/login" />} />
          
          </>
):(
  <Route path ="*" element={<NotFound />} />
)}
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={loggedIn ? <TourDetails />: <Navigate to="/login" />} />
          <Route path="/search" element={<ResultOfSearch />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/yourbooking" element={<YourBooking />} />
      

          <Route path ="*" element={<NotFound />} />


         
        </Routes>
        </AnimatePresence>
        {!isDashboard && <Footer />}
        </FavoriteProvider>
      </TourProvider>
     </TokenProvider>
      </LoginProvider>
    </div>
  );
}

export default App;

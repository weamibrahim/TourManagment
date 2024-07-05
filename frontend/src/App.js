import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, NavLink } from "react-router-dom";
import Header from './Components/Parts/Header/Header';
import Footer from './Components/Parts/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Tours from './Components/Pages/Tours/Tours';
import TourDetails from './Components/Pages/TourDetails/TourDetails';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import ResultOfSearch from './Components/Pages/ResultOfSearch/ResultOfSearch';
import Checkout from './Components/Pages/Checkout/Checkout';
import Profile from './Components/Pages/Profile/profile';
import UpdateProfile from './Components/Pages/UpdateProfile/UpdateProfile';

//import { useState ,useEffect} from "react";

function App() {
  const loggedIn = localStorage.getItem('accessToken') !== null;
  return (
    <div className="App">
      <BrowserRouter>
<Header/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={loggedIn ? <TourDetails />: <Navigate to="/login" />} />
          <Route path="/search" element={<ResultOfSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/checkout" element={<Checkout />} />

         
        </Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

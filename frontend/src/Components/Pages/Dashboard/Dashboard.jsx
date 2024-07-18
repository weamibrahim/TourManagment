import { Helmet } from 'react-helmet-async';
import SideBar from './SideBar/SideBar';
import BookingPerMonth from './charts/BookingPerMonth';
import NumOFCities from './charts/NumOFCities';
import TourRating from './charts/TourRating';
import RevenuePerMonth from './charts/RevenuePerMonth';
import MaxGroupSizePerTour from './charts/MaxGroupSizePerTour';
import './Dashboard.css';

function Dashboard() {
  

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className='d-flex'>

        <SideBar />
        <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
          <BookingPerMonth/>
          </div>
          <div className='col-md-4'><NumOFCities/></div>
          <div className='col-md-4'><TourRating/></div>
          <div className='col-md-4'><RevenuePerMonth/></div>
          <div className='col-md-4'><MaxGroupSizePerTour/></div>

        
        </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

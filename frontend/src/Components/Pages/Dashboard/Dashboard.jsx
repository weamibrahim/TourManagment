import { Helmet } from 'react-helmet-async';
import SideBar from './SideBar/SideBar';
import BookingPerMonth from './charts/BookingPerMonth';
import NumOFCities from './charts/NumOFCities';
import TourRating from './charts/TourRating';
import RevenuePerMonth from './charts/RevenuePerMonth';
import MaxGroupSizePerTour from './charts/MaxGroupSizePerTour';
import './Dashboard.css';
import PageTransition from '../../Parts/Animation/PageTransition';

function Dashboard() {


  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className='' >
        <div className=' d-flex justify-content-between' >
        
            <SideBar />
        
          <div className='mx-auto my-5' >

            <div className='container '>
              <div className='row  '>
                <div className=' col-md-4  shadow p-2  mx-3 mb-5 bg-body rounded'><BookingPerMonth /></div>
            
                <div className='col-md-2 shadow p-3 mb-5 mx-3  bg-body rounded '><MaxGroupSizePerTour /></div>
                <div className='col-md-4 shadow p-3 mb-5 mx-2  bg-body rounded'><NumOFCities /></div>
                
              <div className='col-md-5 shadow p-3 mb-5  mx-3 bg-body rounded'><TourRating /></div>
                
                <div className='col-md-5 shadow p-3 mx-3 mb-5 bg-body rounded'><RevenuePerMonth /></div>
                


              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTransition(Dashboard);

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToken } from '../../../Contexts/TokenContext';

function YourBooking() {
  const { accessToken } = useToken();
  const [bookings, setBookings] = useState([]);
  const userID = JSON.parse(localStorage.getItem('user'))._id;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`https://tour-managment-three.vercel.app/api/booking/BookingByUserID/${userID}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setBookings(response.data.booking);
        console.log('Bookings:', response.data.booking);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [userID, accessToken]);

  return (
    <div>
      
      {bookings.length === 0 ? (
        <p className='text-center'>No bookings found.</p>
      ) : (
        <div className="table-responsive container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Date of Tour</th>
                <th>Group Size</th>
                <th>Price</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.nameOfTour}</td>
                  <td>{new Date(booking.DateOfTour).toLocaleDateString()}</td>
                  <td>{booking.GroupSize}</td>
                  <td>${booking.price}</td>
                  <td>{booking.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default YourBooking;

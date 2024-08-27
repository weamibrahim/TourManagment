import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

function MaxGroupSizePerTour() {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await axios.get('https://tour-managment-three.vercel.app/api/Booking/max-group-size-per-tour', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        const data = response.data;
        console.log('API response:', data);

        if (data && data.result && Array.isArray(data.result)) {
          const dataOfBooking = data.result;
          console.log(dataOfBooking);

          const labels = dataOfBooking.map(d => d._id);
          const counts = dataOfBooking.map(d => d.maxGroupSize);

          const backgroundColors = dataOfBooking.map(() =>
            `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`
          );

          setChartData({
            labels,
            datasets: [
              {
                label: 'Max Group Size Per Tour',
                data: counts,
                backgroundColor: backgroundColors,
              },
            ],
          });
        } else {
          console.error('Unexpected response structure:', data);
          throw new Error('Unexpected response structure');
        }
      } catch (error) {
        console.error('Error fetching bookings data:', error);
        setError('Error fetching bookings data');
      }
    };

    fetchBookingsData();
  }, []);

  return (
    <div >
      <h4>Max Group Size Per Tour</h4>
      <div className='h-75'>
      {error ? (
        <p>Error: {error}</p>
      ) : chartData.labels ? (
        <Doughnut   data={chartData} />
      ) : (
        <p>Loading bookings data...</p>
      )}
      </div>
    </div>
  );
}

export default MaxGroupSizePerTour;

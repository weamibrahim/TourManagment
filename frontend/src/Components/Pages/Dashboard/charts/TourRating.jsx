import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useToken } from '../../../../Contexts/TokenContext';
function TourRating() {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);
  const { accessToken } = useToken();
  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await axios.get('https://tour-managment-three.vercel.app/api/Booking/tour-ratings', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          });
        const data = response.data;
        console.log('API response:', data);

        if (data && data.booking && Array.isArray(data.booking)) {
          const dataOfBooking = data.booking;

          // Create a unique set of month labels
          const months = Array.from(new Set(dataOfBooking.map(d => d._id.month))).sort();

          // Create a unique set of cities
          const cities = Array.from(new Set(dataOfBooking.map(d => d._id.name)));

          // Create datasets for each city
          const datasets = cities.map(city => {
            const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`;
            const cityData = months.map(month => {
              const record = dataOfBooking.find(d => d._id.name === city && d._id.month === month);
              return record ? record.average : 0;
            });

            return {
              label: `${city}`,
              data: cityData,
              backgroundColor: color,
              borderColor: color,
            };
          });

          // Create labels for months
          const labels = months.map(month => `Month ${month}`);

          setChartData({
            labels,
            datasets,
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

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <div>
      <h4>Tour Rating per Month</h4>
      {error ? (
        <p>Error: {error}</p>
      ) : chartData.labels ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Loading bookings data...</p>
      )}
    </div>
  );
}

export default TourRating;

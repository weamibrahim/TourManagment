
import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
function RevenuePerMonth() {
    const [chartData, setChartData] = useState({});
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchBookingsData = async () => {
        try {
          const response = await axios.get('https://tour-managment-three.vercel.app/api/Booking/revenue-per-month', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          });
          const data = response.data;
          console.log('API response:', data);
  
          if (data && data.booking && Array.isArray(data.booking)) {
            const dataOfBooking = data.booking;
  
            const labels = dataOfBooking.map(d => `Month ${d._id.month}, Year ${d._id.year}`);
            const counts = dataOfBooking.map(d => d.totalPrice);
   const colors=`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`
            setChartData({
              labels,
              datasets: [
                {
                  label: 'revenue per month',
                  data: counts,
                  backgroundColor: colors,
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
  
    const options = {
      // Add any other chart options you want here
      scales: {
        y: {
          beginAtZero: true,
          
          ticks: {
  
            color: 'black', // Text color
            font: {
              weight: 'bold' // Font weight
            }
          }
        }
        ,x: {
          beginAtZero: true,
          ticks: {
            color: 'black', // Text color
            font: {
              weight: 'bold' // Font weight
            }
            
          }
        }
      }
    };
  return (
    <div>
    <h3>Revenue Per Month</h3>
     {error ? (
       <p>Error: {error}</p>
     ) : chartData.labels ? (
       <Bar data={chartData} options={options} />
     ) : (
       <p>Loading bookings data...</p>
     )}
   </div>
  )
}

export default RevenuePerMonth
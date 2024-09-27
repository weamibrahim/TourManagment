import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useToken } from "../../../../Contexts/TokenContext";
function BookingPerMonth() {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);
  const { accessToken } = useToken();
  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await axios.get(
          "https://tour-managment-three.vercel.app/api/Booking/bookings-per-month",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = response.data;
        console.log("API response:", data);

        if (data && data.booking && Array.isArray(data.booking)) {
          const dataOfBooking = data.booking;

          const labels = dataOfBooking.map(
            (d) => `Month ${d._id.month}, Year ${d._id.year}`
          );
          const counts = dataOfBooking.map((d) => d.count);
          const colors = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 0.6)`;
          setChartData({
            labels,
            datasets: [
              {
                label: "Bookings per Month",
                data: counts,
                borderColor: colors,
                backgroundColor: colors,
                fill: false,
              },
            ],
          });
        } else {
          console.error("Unexpected response structure:", data);
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        console.error("Error fetching bookings data:", error);
        setError("Error fetching bookings data");
      }
    };

    fetchBookingsData();
  }, []);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "black", // Text color
          font: {
            weight: "bold", // Font weight
          },
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          color: "black", // Text color
          font: {
            weight: "bold", // Font weight
          },
        },
      },
    },
  };

  return (
    <div>
      <h4>Bookings Per Month</h4>
      {error ? (
        <p>Error: {error}</p>
      ) : chartData.labels ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading bookings data...</p>
      )}
    </div>
  );
}

export default BookingPerMonth;

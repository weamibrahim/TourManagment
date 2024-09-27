import { useState } from "react";
///import { useNavigate } from 'react-router-dom';
import Checkout from "../../Pages/Checkout/Checkout";
import { useToken } from "../../../Contexts/TokenContext";
import { useTourData } from "../../../Contexts/TourContext";
function Booking() {
  const { tour } = useTourData();
  console.log(tour);
  const priceOfTour = tour.price;
  // const [dataOfBooking, setDataOfBooking] = useState({});
  const { accessToken } = useToken();
  //const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    GroupSize: "",
    DateOfTour: "",
  });
  console.log("price", tour.price);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    const bookingDetails = {
      ...inputs,
      tourId: tour._id,
      price: priceOfTour,
      nameOfTour: tour.title,
    };
    event.preventDefault();
    try {
      const response = await fetch(
        " https://tour-managment-three.vercel.app/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(bookingDetails),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Stripe session created:", responseData);

      if (responseData.url) {
        window.location.href = responseData.url; // Redirect to Stripe session URL
      } else {
        console.error("Invalid response data:", responseData);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <span className="fw-bold fs-1">${tour.price}</span>
      <span className="fs-3"> /per people</span>
      <hr />
      <div>
        <h2>Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              onChange={handleInputChange}
              name="phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="GroupSize" className="form-label">
              Group Size
            </label>
            <input
              type="text"
              className="form-control"
              id="GroupSize"
              onChange={handleInputChange}
              name="GroupSize"
              min="1"
              max={tour.maxGroupSize}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="DateOfTour" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="DateOfTour"
              onChange={handleInputChange}
              name="DateOfTour"
            />
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              ${priceOfTour} x {inputs.GroupSize} person{" "}
            </div>
            <div>${priceOfTour * inputs.GroupSize}</div>
          </div>
          <div className="d-flex justify-content-between my-3">
            <div>Service charge </div>
            <div>$20</div>
          </div>
          <hr />
          <div className="d-flex justify-content-between my-3">
            <div>Total </div>
            <div>${20 + priceOfTour * inputs.GroupSize}</div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;

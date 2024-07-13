import React from 'react';

function Checkout({ data }) {
  console.log(data);

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  
  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "https://tour-managment-three.vercel.app/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Stripe session created:", responseData);

      if (responseData.url) {
        window.location.href = responseData.url; // Redirect to Stripe session URL
      } else {
        console.error('Invalid response data:', responseData);
      }

    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary" onClick={handleCheckout}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;

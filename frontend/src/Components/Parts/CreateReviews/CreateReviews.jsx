import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { json } from "react-router-dom";
import { useToken } from "../../../Contexts/TokenContext";
const CreateReviews = ({ tourId }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const { accessToken } = useToken();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://tour-managment-three.vercel.app/api/review/create/${tourId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          ReviewText: reviewText,
          Rating: rating,
        }),
      }
    ).then((res) => {
      if (res.status === 200) {
        window.location.reload();
        setReviewText("");
        setRating(0);

        return res.json();
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ReactStars
          count={5}
          value={rating}
          onChange={(newRating) => setRating(newRating)}
          size={24}
          activeColor="#ffd700"
        />
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write a review"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-warning"
            type="submit"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReviews;

import { useState, useEffect } from "react";

import { useToken } from "../../../Contexts/TokenContext";
import { useFavorite } from "../../../Contexts/FavoriteContext";

const ButtonFavorite = ({ tourId }) => {
  const { accessToken } = useToken();
  const { favorite } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log(favorite);
    const isAlreadyFavorite =Array.isArray(favorite) && favorite.some(
      (tour) => tour.tourId._id === tourId
    );
    console.log(isAlreadyFavorite);
    setIsFavorite(isAlreadyFavorite);
  }, [favorite, tourId]);

  const toggleFavorite = async () => {
    try {
      const response = await fetch(
        `https://tour-managment-three.vercel.app/api/favorite/${tourId}`,
        {
          method: isFavorite ? "DELETE" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        setIsFavorite(!isFavorite);
        const data = await response.json();
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button onClick={toggleFavorite} className="bg-transparent border-0">
      {isFavorite ? (
        <svg
          className="mt-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="1.5"
          style={{
            width: "24px",
            height: "24px",
            color: "red",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      ) : (
        <svg
          className="mt-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="1.5"
          style={{
            width: "24px",
            height: "24px",
            color: "red",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      )}
    </button>
  );
};

export default ButtonFavorite;

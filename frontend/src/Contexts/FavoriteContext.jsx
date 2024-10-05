import { createContext, useContext, useState, useEffect } from "react";
import { useToken } from "../Contexts/TokenContext";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const { accessToken } = useToken();
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    getFavorites();
  }, [favorite]);
  const getFavorites = async () => {
    try {
      const response = await fetch(
        "https://tour-managment-three.vercel.app/api/favorite/all",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
     // console.log("Fetched favorites:", data);
      setFavorite(data || []);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };
  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);

import { createContext , useContext , useState } from "react";

const TourContext = createContext();



export const TourProvider = ({ children }) => {
    const [tour, setTour] = useState({});

    return (
        <TourContext.Provider value={{ tour, setTour }}>
            {children}
        </TourContext.Provider>
    )   
}

export const useTourData = () => useContext(TourContext);
     
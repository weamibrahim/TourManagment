import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
function ResultOfSearch() {

    const location = useLocation();
    const [tours] =useState(location.state)
    console.log(tours)
    return (
        <div>
           {tours.map((tour) => {
                return (
                    
                    <div className="col">
                        <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{tour.title}</h5>
                                    <p className="card-text">{tour.desc}</p>
                                    <p>price{tour.price}</p>
                <p>distanc{tour.distance}</p>
                <p>city {tour.city}</p>
                <p>{tour.address}</p>
                <p>maxGroup{tour.maxGroupSize}</p>
                <button className="btn btn-primary"><NavLink to={`/tours/${tour._id}`}>Details</NavLink></button>
                                </div>
                        </div>
                    </div>
                   
                )
            })}

        </div>
    );
}

export default ResultOfSearch;
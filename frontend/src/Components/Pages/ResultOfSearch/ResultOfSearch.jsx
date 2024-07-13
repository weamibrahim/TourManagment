import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./ResultOfSearch.css"
function ResultOfSearch() {

    const location = useLocation();
    const [tours] =useState(location.state)
    console.log(tours)
    return (
        <div>
           {tours.map((tour) => {
                return (
                    <div className="d-flex justify-content-center  resultSearch my-3">
                    <div className="col md-6    ">
                        <div className="card text-center ">
                        <img src={'http://localhost:7000/images/' + tour.photo} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{tour.title}</h5>
                                    <p className="card-text">{tour.desc}</p>
                                    <p className="text-title"><span className="mx-2 ">Price</span>{tour.price}$</p>
                <p><span className="mx-2" >Distance</span>{tour.distance}</p>
                <p><span  className="mx-2">City</span>{tour.city}</p>
              
                <p><span className="mx-2" >MaxGroup</span> {tour.maxGroupSize}</p>
                <div className="d-flex justify-content-center">
                <button className="btn btn-primary"><NavLink  className="text-white text-decoration-none" to={`/tours/${tour._id}`}>Details</NavLink></button>
                </div>
                                </div>
                        </div>
                    </div>
                   </div>
                )
            })}

        </div>
    );
}

export default ResultOfSearch;
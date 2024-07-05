import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateReviews from "../../Parts/CreateReviews/CreateReviews";
import { MdOutlineStar } from "react-icons/md";
import './TourDetails.css'
import { CiLocationOn } from "react-icons/ci";
import { RiPinDistanceLine } from "react-icons/ri";
import { MdOutlinePeople } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdStreetview } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import Booking from "../../Parts/Booking/Booking";
import { Helmet } from "react-helmet-async";
function TourDetails() {
    const { id } = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7000/api/tour/tour/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTour(data);
               // console.log(data);
            });
    }, [id]);

    return (
        <>
        <Helmet>
            <title>{tour.title}</title>
        </Helmet>
        <div className="container">
            <div className="row">
                <div className="col-md-7 my-4 ">
                    <div className="card">
                        <img className='img-fluid rounded-4 card-img-top' src="https://img.freepik.com/free-photo/blue-villa-beautiful-sea-hotel_1203-5316.jpg?t=st=1719256012~exp=1719259612~hmac=37e68eb59df89cdb18cebf73990c9b9ab316b58e5222f7a1020683c26f3d1c5e&w=1060" />
                        <div className="card-body">
                            <h2>{tour.title}</h2>
                            <div className="row">
                                <div className="col-md-4 mb-2">
                                    <p><span className="fs-5 text-warning">$</span>{tour.price}/per person</p>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <p><CiLocationOn className="fs-5 text-warning" />{tour.city}</p>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <p><RiPinDistanceLine className="fs-5 text-warning" />{tour.distance}</p>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <p><MdStreetview className="fs-5 text-warning" />{tour.address}</p>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <p><MdOutlinePeople className="fs-5 text-warning" />{tour.maxGroupSize} people</p>
                                </div>
                            </div>
                            <p>{tour.desc}</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <CreateReviews tourId={tour._id} />
                        {tour.reviews && Array.isArray(tour.reviews) ? (
                            tour.reviews.map((review) => (
                                <div key={review._id} className="row">
                                    <div className="col-md-10">
                                        <p><MdOutlinePerson className="fs-3" />
                                            <strong>{review.userID.name}</strong></p>
                                        <p>{review.createdAt}</p>
                                        <p className="fw-bold">{review.ReviewText}</p>
                                    </div>
                                    <div className="col-md-2 text-end">
                                        <p className="fs-4">{review.Rating}<MdOutlineStar className="text-warning fs-4" /></p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No reviews available.</p>
                        )}
                    </div>

                </div>



                <div className="col-md-4 my-4 ">

<Booking dataOfTour={tour}/>
                
                </div>
            </div>
        </div>
        </>
    );
}

export default TourDetails;

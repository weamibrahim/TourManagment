import React from "react";
import { useFavorite } from "../../../Contexts/FavoriteContext";
import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

function Favorite() {
  const { favorite } = useFavorite();
  console.log(favorite);
  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favorite.map((tour) => {
            return (
              <div className="col">
                <div className="card rounded-top-4">
                  <img
                    className="img-fluid rounded-4 card-img-top"
                    src={
                      "https://tour-managment-three.vercel.app/images/" +
                      tour.tourId.photo
                    }
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4>
                          <CiLocationOn className="fs-4 text-warning " />
                          <span className="ms-1">{tour.tourId.city}</span>
                        </h4>
                        <h5 className="card-title">{tour.tourId.title}</h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="card-text mb-0 ">
                        <span className="text-warning">
                          ${tour.tourId.price}
                        </span>
                        /Per Person
                      </h6>
                      <button className="btn btn-primary ">
                        <NavLink
                          className="text-white text-decoration-none"
                          to={`/tours/${tour.tourId._id}`}
                        >
                          Details
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Favorite;

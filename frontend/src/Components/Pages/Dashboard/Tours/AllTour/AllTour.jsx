import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import PageTransition from "../../../../Parts/Animation/PageTransition";
import { useToken } from "../../../../../Contexts/TokenContext";
function AllTour() {
  const [page, setPage] = useState(1);
  const [tours, setTours] = useState([]);
  const { accessToken } = useToken();
  useEffect(() => {
    GetAllTour();
  }, [page]);
  const GetAllTour = () => {
    fetch(`https://tour-managment-three.vercel.app/api/tour/tours?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
      });
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handleDelete = (id) => {
    fetch(`https://tour-managment-three.vercel.app/api/tour/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setTours(tours.filter((tour) => tour._id !== id));
      });
  };
  return (
    <div className="d-flex justify-content-around ">
      <SideBar />
      <Helmet>
        <title>All Tour</title>
      </Helmet>
      <div className="container my-4">
        <button className="btn btn-primary mt-5">
          <NavLink
            className="text-white text-decoration-none"
            to="/dashboard/tours/create"
          >
            Create
          </NavLink>
        </button>
        <div className="table-responsive mx-auto mt-3 shadow   mb-5 bg-body rounded">
          <table className="table ">
            <thead className="table-secondary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>

                <th scope="col">Action</th>
              </tr>
            </thead>

            {tours.map((tour, index) => (
              <tbody key={tour._id}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                  <img src={tour.photo} style={{ width: "100px" }} />
  
                  </td>
                  <td>{tour.title}</td>
                  <td>${tour.price}</td>

                  <td>
                    <NavLink
                      to={`/dashboard/tours/update/${tour._id}`}
                      className="btn btn-primary"
                    >
                      <FaRegEdit className="fs-3" />
                    </NavLink>
                    <button
                      className="btn btn-danger "
                      onClick={() => handleDelete(tour._id)}
                    >
                      <MdDelete className="fs-3" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="d-flex justify-content-between my-4">
          <button
            className="btn btn-outline-secondary"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button
            className="btn btn-outline-secondary"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageTransition(AllTour);

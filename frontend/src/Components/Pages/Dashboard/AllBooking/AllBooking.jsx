import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import SideBar from "../SideBar/SideBar";
import { MdDelete } from "react-icons/md";
import { useToken } from "../../../../Contexts/TokenContext";
function AllBooking() {
  const [bookings, setBookings] = useState([]);
  const { accessToken } = useToken();
  useEffect(() => {
    GetAllBooking();
  }, []);

  const GetAllBooking = () => {
    fetch("https://tour-managment-three.vercel.app/api/booking/all-bookings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data.bookings || []);
      });
  };

  const handleDelete = (id) => {
    fetch(`https://tour-managment-three.vercel.app/api/booking/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setBookings(bookings.filter((booking) => booking._id !== id));
      });
  };

  return (
    <div className="d-flex justify-content-around ">
      <SideBar />
      <div className="container my-4">
        <div className="table-responsive mx-auto my-5 shadow mb-5 bg-body rounded">
          <table className="table">
            <thead className="table-secondary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Name of Tour</th>
                <th scope="col">Price</th>
                <th scope="col">Date of Tour</th>
                <th scope="col">Group Size</th>
                <th scope="col">Total Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(bookings) &&
                bookings.map((booking, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{booking.name}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.nameOfTour}</td>
                    <td>{booking.price}</td>
                    <td>{new Date(booking.DateOfTour).toLocaleDateString()}</td>
                    <td>{booking.GroupSize}</td>
                    <td>{booking.price * booking.GroupSize}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(booking._id)}
                      >
                        <MdDelete className="fs-3" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllBooking;

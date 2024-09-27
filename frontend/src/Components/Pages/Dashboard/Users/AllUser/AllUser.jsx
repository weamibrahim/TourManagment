import React from "react";
import { useState, useEffect } from "react";
import SideBar from "../../SideBar/SideBar";
import { MdDelete } from "react-icons/md";
import PageTransition from "../../../../Parts/Animation/PageTransition";
import { useToken } from "../../../../../Contexts/TokenContext";
function AllUser() {
  const [users, setUsers] = useState([]);
  const { accessToken } = useToken();
  useEffect(() => {
    GetAllUser();
  }, []);
  const GetAllUser = () => {
    fetch("https://tour-managment-three.vercel.app/api/users/alluser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };
  const handleDelete = (id) => {
    fetch(`https://tour-managment-three.vercel.app/api/users/delete/${id}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setUsers(users.filter((user) => user._id !== id));
      });
  };
  return (
    <div className="d-flex justify-content-around main-content">
      <SideBar />
      <div className="container my-4">
        <div className="table-responsive mx-auto my-5 shadow   mb-5 bg-body rounded">
          <table className="table">
            <thead className="table-secondary">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === "admin" ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      {" "}
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

export default PageTransition(AllUser);

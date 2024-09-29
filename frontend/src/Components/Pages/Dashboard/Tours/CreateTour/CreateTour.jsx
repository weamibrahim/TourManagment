import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "../../SideBar/SideBar";
import PageTransition from "../../../../Parts/Animation/PageTransition";
import { useToken } from "../../../../../Contexts/TokenContext";
function CreateTour() {
  const navigate = useNavigate();
  const { accessToken } = useToken();
  const [inputs, setInputs] = useState({
    title: "",
    city: "",
    address: "",
    desc: "",
    price: "",
    distance: "",
    maxGroupSize: "",
    photo: null, // Initialize as null for the file
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setInputs((prev) => ({ ...prev, photo: files[0] })); // Set the file
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClick = async (e) => {
    console.log("Access Token:", accessToken);
    e.preventDefault();

    const formData = new FormData();
    Object.keys(inputs).forEach((key) => {
      formData.append(key, inputs[key]);
    });

    try {
      await axios
        .post(
          "https://tour-managment-three.vercel.app/api/tour/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            console.log("Tour created successfully");
            navigate("/dashboard/tours");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-md-flex ">
      <SideBar />
      <form className="form m-auto my-4 ">
        <h1 className="text-center">Create Tour</h1>
        <div>
          <label className="form-label">Photo</label>
          <input
            className="form-control"
            type="file"
            name="photo"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Desc</label>
          <input
            className="form-control"
            type="text"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Distance</label>
          <input
            className="form-control"
            type="number"
            name="distance"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Max Group Size</label>
          <input
            className="form-control"
            type="number"
            name="maxGroupSize"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center ">
          <button onClick={handleClick} className="btn btn-primary my-3">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default PageTransition(CreateTour);

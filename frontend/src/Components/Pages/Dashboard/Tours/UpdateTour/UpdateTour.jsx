import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
function UpdateTour() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the tour ID from the URL parameters

  const [inputs, setInputs] = useState({
    title: "",
    city: "",
    address: "",
    desc: "",
    price: "",
    distance: "",
    maxGroupSize: "",
    photo: null // Initialize as null for the file
  });

  useEffect(() => {
    // Fetch the existing tour data
    const fetchTour = async () => {
      try {
        const res = await axios.get(`https://tour-managment-three.vercel.app/api/tour/tour/${id}`);
        const tour = res.data;
        setInputs({
          title: tour.title,
          city: tour.city,
          address: tour.address,
          desc: tour.desc,
          price: tour.price,
          distance: tour.distance,
          maxGroupSize: tour.maxGroupSize,
          photo: tour.photo // Keep photo as null initially
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchTour();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setInputs((prev) => ({ ...prev, photo: files[0] })); // Set the file
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClick = async (e) => {
    const accessToken = localStorage.getItem('accessToken');
    console.log('Access Token:', accessToken);
    e.preventDefault();

    const formData = new FormData();
    Object.keys(inputs).forEach(key => {
      formData.append(key, inputs[key]);
    });

    // Improved logging of FormData
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
console.log("formData",formData)
    try {
      await axios.put(`https://tour-managment-three.vercel.app/api/tour/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${accessToken}`
        }
      }).then((res) => {
        if (res.status === 200) {
          console.log("Tour updated successfully");
          navigate("/dashboard/tours");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex '>
    <SideBar/>
      <form className='form m-auto'>
        <h1>Update Tour</h1>
        <div>
          <label className='form-label'>Photo</label>
          <input
            className='form-control'
            type="file"
            name="photo"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='form-label'>Title</label>
          <input
            className='form-control'
            type="text"
            name="title"
            value={inputs.title} // Pre-fill with the current value
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='form-label'>City</label>
          <input
            className='form-control'
            type="text"
            name="city"
            value={inputs.city} // Pre-fill with the current value
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='form-label'>Address</label>
          <input
            className='form-control'
            type="text"
            name="address"
            value={inputs.address} // Pre-fill with the current value
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='form-label'>Desc</label>
          <input
            className='form-control'
            type="text"
            name="desc"
            value={inputs.desc} // Pre-fill with the current value
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='form-label'>Price</label>
          <input
            className='form-control'
            type="number"
            name="price"
            value={inputs.price} // Pre-fill with the current value
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='form-label'>Distance</label>
          <input
            className='form-control'
            type="number"
            name="distance"
            value={inputs.distance} // Pre-fill with the current value
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='form-label'>Max Group Size</label>
          <input
            className='form-control'
            type="number"
            name="maxGroupSize"
            value={inputs.maxGroupSize} // Pre-fill with the current value
            onChange={handleChange}
          />
        </div>
        <div className='d-flex justify-content-center'>
        <button className='btn btn-primary my-3' onClick={handleClick}>Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTour;

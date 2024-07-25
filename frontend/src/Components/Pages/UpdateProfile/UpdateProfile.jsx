import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function UpdateProfile() {
    const navigate = useNavigate()
    let user=JSON.parse(localStorage.getItem("user"))
    const accessToken = JSON.parse(localStorage.getItem("accessToken"))
    const [inputs, setInputs] = useState({

        name:user.name,
        email:user.email,    

    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    };

   const handleUpdate = (event) => {
        event.preventDefault();
        fetch(`https://tour-managment-three.vercel.app/api/users/update/${user._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(inputs),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.message === "User updated successfully") {
                    localStorage.setItem("user", JSON.stringify(data.user))
                    navigate("/profile")
                    
                }
            })
    }


  return (
    <div  className="container my-5"style={{ maxWidth: " 800px" , height: "450px "}} >
        <div className=" justify-content-center align-items-center">
        <div className="row ">
        <div className="pb-5 col-lg-12 align-items-center justify-content-center " >
        <div className=" border-0 shadow p-0 mb-5 bg-body-tertiary rounded">
<form  onSubmit={handleUpdate}>
<div className="card-body m-2 " >
<div className="row mb-3 ">
<div className="col-sm-2 mt-3">
                                                Name
                                            </div>
 
 <div className="col-sm-10 text-secondary"> <input type="text" placeholder="Name"  className='pt-2 form-control mt-3' value={inputs.name} name="name" onChange={handleChange}/>
 </div>
 </div>
 </div>
 <div className="card-body m-2 " >
<div className="row mb-3 ">
    
<div className="col-sm-2 mt-3">
                                              email
                                            </div>
  <div className="col-sm-10 text-secondary"><input type="email" placeholder="Email" className=' pt-2 form-control mt-3' value={inputs.email} name="email" onChange={handleChange} />
 </div>
</div>
</div>
<div className='d-flex justify-content-center'>
    <button className='btn btn-info my-3'>Update</button>
    </div>
    </form>
    </div>
    </div>
</div>
    </div>



    </div>
  )
}

export default UpdateProfile
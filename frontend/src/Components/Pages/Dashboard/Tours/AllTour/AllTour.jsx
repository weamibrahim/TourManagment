import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react'
import SideBar from '../../SideBar/SideBar';
function AllTour() {
  const [page, setPage] = useState(1)
  const [tours, setTours] = useState([])
    useEffect(() => {
        fetch(`https://tour-managment-three.vercel.app/api/tour/tours?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setTours(data)
            })
    }, [page])
    const handleNextPage = () => {
        setPage(page + 1)
    }
    const handlePrevPage = () => {
        setPage(Math.max(page - 1, 1))
    }

    const handleDelete = (id) => {
        fetch(`https://tour-managment-three.vercel.app/api/tour/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        

        })
            .then(res => res.json())
            
    }
  return (
    <div className='d-flex justify-content-around'>
    <SideBar/>
     <Helmet>
            <title>All Tour</title>
        </Helmet>
    <div className="container">
      <button className="btn btn-primary">
        <NavLink className="text-white text-decoration-none" to="/dashboard/tours/create">Create
        </NavLink>
        </button>
        <div className="table-responsive">
<table className='table'>

<thead>
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
    <td><img src={'https://tour-managment-three.vercel.app/images/'+tour.photo} style={{width:"100px"}}/></td>
    <td>{tour.title}</td>
    <td>{tour.price}</td>
    
    <td><NavLink to={`/dashboard/tours/update/${tour._id}`} className="btn btn-primary">Update</NavLink>
    <button className="btn btn-danger mx-3" onClick={() => handleDelete(tour._id)}>Delete</button>
    </td>

    </tr>
    </tbody>

))}

</table>
</div>


    <div className="d-flex justify-content-between my-4">
                <button className="btn btn-info" onClick={handlePrevPage} disabled={page === 1}>
                    Previous
                </button>
                <span>Page {page}</span>
                <button className="btn btn-info" onClick={handleNextPage}>
                    Next
                </button>
            </div>
    </div>
    </div>
  )
}

export default AllTour
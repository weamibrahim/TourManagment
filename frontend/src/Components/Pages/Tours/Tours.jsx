import React from 'react'
import "./Tours.css"
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Search from '../../Parts/Search/Search';
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';
function Tours() {
    const [page, setPage] = useState(1);

    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch(`https://tour-managment-three.vercel.app/api/tour/tours?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setTours(data)
            }, [page])
    })
    const handleNextPage = () => {
        setPage(page + 1)
    }
    const handlePrevPage = () => {
        setPage(Math.max(page - 1, 1))
    }

    return (
        <>
        <Helmet>
            <title>Tours</title>
        </Helmet>
        <div className='container'>
            <Search />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {tours.map((tour) => {
                    return (

                        <div className="col">
                            <div className="card rounded-top-4">
                               
                                <img className='img-fluid rounded-4 card-img-top' src={'https://tour-managment-three.vercel.app/images/' + tour.photo}  />
                                <div className="card-body">
                                    <h4>   <CiLocationOn className="fs-4 text-warning " /><span className='ms-1'>{tour.city}</span></h4>
                                    <h5 className="card-title">{tour.title}</h5>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6 className="card-text mb-0 ">
                                            <span className='text-warning'>${tour.price}</span>/Per Person
                                        </h6>
                                        <button className="btn btn-primary ">
                                            <NavLink className="text-white text-decoration-none" to={`/tours/${tour._id}`}>
                                                Details
                                            </NavLink>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    )
                })}

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
        </>
    )
}

export default Tours
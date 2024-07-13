import { useEffect, useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import SideBar from '../../SideBar/SideBar';
function AllReview() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:7000/api/review/Reviews'
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setReviews(data)
      })
     
  }, [])
  const handleDelete = (id) => {

    fetch(`http://localhost:7000/api/review/delete/${id}`, {

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
    <div className='container'>
      <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th scope="col">Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            reviews.map((review, index) => <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{review.userID.name}</td>
              <td>{review.userID.email}</td>
              <td>{review.ReviewText}</td>
              <td className='fs-4'>{review.Rating}
<span><MdOutlineStar  className='text-warning '/></span>
              </td>
              <td><button className="btn btn-danger" onClick={() => handleDelete(review._id)}>Delete</button></td>
            </tr>)
          }
        </tbody>
      </table>
</div>
    </div>
    </div>
  )
}

export default AllReview
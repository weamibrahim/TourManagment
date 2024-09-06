import { useEffect, useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import SideBar from '../../SideBar/SideBar';
import { MdDelete } from "react-icons/md";
import {useToken} from '../../../../../Contexts/TokenContext'
function AllReview() {
  const [reviews, setReviews] = useState([])
  const { accessToken } = useToken();
  useEffect(() => {
    GetAllReview()
     
  }, [])
 const GetAllReview =()=>{
  fetch('https://tour-managment-three.vercel.app/api/review/Reviews'
  )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setReviews(data)
    })
 }
  const handleDelete = (id) => {

    fetch(`https://tour-managment-three.vercel.app/api/review/delete/${id}`, {

      method: 'DELETE',

      headers: {

        'Authorization': `Bearer ${accessToken}`

      }

    })

      .then(res => res.json())

      .then(() => {

        setReviews(reviews.filter(review => review._id !== id))

      })
  }
  return (
    <div className='d-flex justify-content-around main-content'>
    <SideBar/>
    <div className='container my-4'>
      <div className="table-responsive mx-auto my-5 shadow   mb-5 bg-body rounded">
      <table className="table ">
        <thead className="table-secondary">
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
              <td><button className="btn btn-danger" onClick={() => handleDelete(review._id)}><MdDelete className='fs-3' /></button></td>
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
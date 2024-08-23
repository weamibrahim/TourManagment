import React from 'react'
import { useState , useEffect } from 'react'
import SideBar from '../../SideBar/SideBar';
import { MdDelete } from "react-icons/md";
import PageTransition from '../../../../Parts/Animation/PageTransition';
function AllUser() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://tour-managment-three.vercel.app/api/users/alluser', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])
    const handleDelete = (id) => {

        fetch(`https://tour-managment-three.vercel.app/api/users/delete/${id}`, {

            method: 'DELETE',

            headers: {

                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`

            }

        })
    }
  return (
  
    <div className='d-flex justify-content-around'>
    <SideBar/>
    <div className='container'>
      <div className="table-responsive">
       <table className='table'>
            <thead>
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
                            <button className="btn btn-danger" onClick={() => handleDelete(user._id)}> <MdDelete  className='fs-3'/></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}

export default PageTransition(AllUser)
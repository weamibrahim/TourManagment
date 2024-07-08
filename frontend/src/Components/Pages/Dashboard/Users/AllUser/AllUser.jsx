import React from 'react'
import { useState , useEffect } from 'react'
function AllUser() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/api/users/alluser', {
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

        fetch(`http://localhost:7000/api/users/delete/${id}`, {

            method: 'DELETE',

            headers: {

                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`

            }

        })
    }
  return (
    <div>
        <table className="table">
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
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role === "admin" ? "Yes" : "No"}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(user._id)}> Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default AllUser
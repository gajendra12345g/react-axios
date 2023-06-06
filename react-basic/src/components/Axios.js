import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Axios() {

    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        axios.request({
          url:"https://jsonplaceholder.typicode.com/users",
          method:"GET"
      }).then((response)=>{
            console.log(response);
        setUserData(response.data)

        })
    },[])

  return (
    <>
    <div>Axios</div>
    <div>
    <div className='container'>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
    </tr>
    {userData.map(data=>(
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
        </tr>
    ))}
</table>
</div>   
    </div>
    </>
  )
}

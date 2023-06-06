import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [userData, setUserData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((d)=>setUserData(d))
        },[])

  return (
    <>
    <div>FetchMethod</div>
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


import axios from 'axios';
import React, { useState } from 'react'

export default function Axiospost() {
    const data={
        fName: "",
        lName: "",
    };
    const [inputData,setInputData]=useState(data);
    

    
    const handleData=(e) => {
        setInputData({...inputData,[e.target.name]:e.target.value})
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.request({
            method:"POST",
            url:"https://jsonplaceholder.typicode.com/users", 
            data:inputData})
            .then((response)=>{
            console.log(response);
        })
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.request({
            method:"PUT",
            url:"https://jsonplaceholder.typicode.com/users/1",
            data:inputData})
            .then((response)=>{
            console.log(response);
        })
    }

    const handleDelete=(e)=>{
        e.preventDefault();
        axios.request({
            method:"DELETE",
            url:"https://jsonplaceholder.typicode.com/users/1"})
            .then((response)=>{
            console.log(response);
        })
    }
  return (
      <>
        <label>First Name</label>
        <input type='text' name='fName' value={inputData.fName} onChange={handleData}></input><br/>
        <label>Last Name</label>
        <input type='text' name='lName' value={inputData.lName} onChange={handleData}></input><br/>

        <button onClick={handleSubmit}>submit</button>
        <button onClick={handleUpdate}>update</button>
        <button onClick={handleDelete}>delete</button>


      </>
  )
}

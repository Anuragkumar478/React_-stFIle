import { useState } from 'react'


import './App.css'
import axios from 'axios'

 

function App() {
  const[formData,setFormData]=useState({
    name:'',
    rollno:'',
    class:'',
    email:'',
    registration:''
  })
  const handlChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async()=>{
    try{
      const response= await axios.post('http://localhost:5000/submit', formData);
      alert(response.data.message);
    }
    catch(error){
     
    }
  }

  return (
    <>
      <div id='main_div'>
    <div id='form_div'>
      <form id='form'>
      <label >Name </label><br/>
      <input  name='name'  type='text' onChange={handlChange}></input><br/>
      <label>Roll No</label><br/>
      <input name='rollno' type='number' onChange={handlChange}></input><br/>
      <label>class</label><br/>
      <input  name='class' type='text' onChange={handlChange}></input><br/>
      <label >email</label><br/>
      <input name='email' type='email' onChange={handlChange}></input><br/>
       <label >Registration</label><br/>
      <input name='registration' type='number' onChange={handlChange}></input><br/>
     <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
      </div>
     
    </>
  )
}

export default App

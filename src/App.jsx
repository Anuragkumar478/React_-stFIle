import { useState } from 'react'


import './App.css'

function App() {
  

  return (
    <>
      <div id='main_div'>
    <div id='form_div'>
      <form id='form'>
      <label>Name </label><br/>
      <input type='text'></input><br/>
      <label>Roll No</label><br/>
      <input type='number'></input><br/>
      <label>class</label><br/>
      <input type='text'></input><br/>
      <label >gmail</label><br/>
      <input type='email'></input><br/>
       <label >Registration</label><br/>
      <input type='number'></input><br/>
     <button type='button'>Submit</button>
      </form>
    </div>
      </div>
     
    </>
  )
}

export default App

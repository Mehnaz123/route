import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate =useNavigate();
  const handleClick=()=>{
    navigate("/")
  }
  return (
    <div>
      <h2>Contact</h2>
      <button onClick ={handleClick}>go back to index</button>
    </div>
  )
}

export default Contact

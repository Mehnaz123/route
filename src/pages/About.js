import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate =useNavigate();
  const handleClick=()=>{
    navigate("/")
  }
  return (
    <div>
      <h2>About</h2>
      <button onClick ={handleClick}>go back to index</button>
    </div>
  )
}

export default About

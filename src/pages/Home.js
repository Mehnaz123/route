import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home= () => {
  const navigate =useNavigate();
  const handleClick=()=>{
    navigate("/")
  }
  return (
    <div>
      <h2>Home</h2>
      <button onClick ={handleClick}>go back to index</button>
    </div>
  )
}

export default Home

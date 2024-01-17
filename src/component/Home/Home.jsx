import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    navigate("/login")

  }
  return (
    <>
      <div>
        <button onClick={logout}>Log Out</button>
      </div>
    </>
  )
}

export default Home
import React from 'react'
import ErrorImg from "../../img/404.svg"

const NotError = () => {
  return (
    <>
    <div className="error_img">
        <img src={ErrorImg} alt="Page not Found" />
    </div>
    </>
  )
}

export default NotError
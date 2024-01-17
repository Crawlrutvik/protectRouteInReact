import React from 'react'
import data from './data.json'
import { useNavigate} from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate()
  
  const LernMore = (id) => {
    navigate(`/service/${id}`)

  }
  
  return (
    <>
      <div className='card_wrap'>
        {
          data?.map((lang) => {
            return (

              <div className='card' key={lang?.id}>
                <h2>language Name:- {lang?.lanuageName}</h2>
                <h5>Initial release:- {lang?.Rdate}</h5>
                <h4>founder Name:- {lang?.Fname} </h4>
                <button onClick={() => LernMore(lang?.id)}>Learn More</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Service
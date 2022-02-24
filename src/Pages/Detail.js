import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Detail = () => {
  const location = useLocation();
  let navigate = useNavigate();
  return (
    <>
      <div className='detail-des'>
        <p onClick={() => { navigate('/') }}>Back</p>
      </div>
      <div className='detail-img'>
        <img alt='#' src={location.state.photo} />
        <p>{location.state.description}</p>
      </div>
    </>

  )
}

export default Detail
import React from 'react'
import WWS from '../public/WWS.svg'
import './Backview.css'


const Backview = () => {

  return (
    <div className='foto'>
     <img src={WWS} className='WWSclass'/>
     <input className='txtInput' type='text' placeholder='Search Location'/>
    </div>
  )
}

export default Backview
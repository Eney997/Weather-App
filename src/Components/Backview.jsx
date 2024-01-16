import React from 'react'
import WWS from '../public/WWS.svg'
import './Backview.css'


const Backview = () => {

  return (
    <div className='backBox'>
      <header>
     <img src={WWS} className='WWSclass'/>
     <input className='txtInput' type='text' placeholder='Search Location'/>
    </header>
    <div className='celInfo'>
      <h1 className='celh1 '>16°</h1>
      <h2 className='celh2 '>London</h2>
      <h3 className='celh3 '>06:09 - Monday, 9 Sep ‘23</h3>
      <div className='inPick'></div>
    </div>
    </div>
  )
}

export default Backview
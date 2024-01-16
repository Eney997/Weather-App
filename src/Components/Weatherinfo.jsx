import React from 'react'
import Backview from './Backview'
import './Weatherinfo.css'

const Weatherinfo = () => {
  return (
    <Backview>
        <div className='blunInfos'>
            <div className='header2'>
            <h1 className='he1'>Weather Details...</h1>
            <h2 className='he2'>thunderstorm with light drizzle</h2>
        </div>
        <div className='weatherBelike'>
            <h1 id='rva' className='gamoiyureba'>Temp max</h1>
            <p id='cameti' className='gamoiyureba2'>19°</p>
            <div className='img1'></div>
            <h2 id='cxra' className='gamoiyureba'>Temp min</h2>
            <p id='totxmeti' className='gamoiyureba2'>15°</p>
            <div className='img2'></div>
            <h3 id='ati' className='gamoiyureba'>Humadity</h3>
            <p id='txutmeti' className='gamoiyureba2'>58%</p>
            <div className='img3'></div>
            <h4 id='tertmeti' className='gamoiyureba'>Cloudy</h4>
            <p id='teqvsmeti' className='gamoiyureba2'>86%</p>
            <div className='img4'></div>
            <h5 id='tormeti' className='gamoiyureba'>Wind</h5>
            <p id='chvidmeti' className='gamoiyureba2'>5km/h</p>
            <div className='img5'></div>
        </div>
        </div>
    </Backview>
  )
}

export default Weatherinfo
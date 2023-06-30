import React from 'react'
import Location from './Location'
import AboutProperty from './AboutProperty'
import Cleaning from './Cleaning'
import "./MainLoc.css";

const MainLoc = () => {
  return (
    <div className='mainloc'>
        <Location/>
        <AboutProperty/>
        <Cleaning/>
    </div>
  )
}

export default MainLoc
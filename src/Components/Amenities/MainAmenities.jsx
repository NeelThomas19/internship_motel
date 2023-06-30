import React from 'react'
import Amenities from './Amenities'
import RoomAmenities from './RoomAmenities'
import "./MainAmenities.css";
const MainAmenities = () => {
  return (
    <div className='mainamenities'>
        <Amenities/>
        <RoomAmenities/>
    </div>
  )
}

export default MainAmenities
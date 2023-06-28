import React, { useState } from "react";
// import {
//   faCalendarDays,
//   faPerson,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";
import './Rooms.css';

function Rooms() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform room availability check or other logic here
    // You can use the state values (checkIn, checkOut, adults, children, rooms) to implement the desired functionality

    console.log('Form submitted');
  };

  return (
    <div id="rooms" className="room-availability">
      <h2 className="room-availability__title">Room Availability</h2>
      <form onSubmit={handleSubmit}>
        <div className="room-availability__input-group">
          <label className="room-availability__label">Check In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="room-availability__input"
          />
        </div>

        <div className="room-availability__input-group">
          <label className="room-availability__label">Check Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="room-availability__input"
          />
        </div>

        <div className="room-availability__input-group">
          <label className="room-availability__label">Adults</label>
          <select
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className="room-availability__select"
          >
            <option value="1">1 adult</option>
            <option value="2">2 adults</option>
            <option value="3">3 adults</option>
            <option value="4">4 adults</option>
            <option value="5">5 adults</option>
            <option value="6">6 adults</option>
          </select>
        </div>

        <div className="room-availability__input-group">
          <label className="room-availability__label">Children</label>
          <select
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value))}
            className="room-availability__select"
          >
            <option value="0">No children</option>
            <option value="1">1 child</option>
            <option value="2">2 children</option>
            <option value="3">3 children</option>
            <option value="4">4 children</option>
            <option value="5">5 children</option>
            <option value="6">6 children</option>
          </select>
        </div>

        <div className="room-availability__input-group">
          <label className="room-availability__label">Rooms</label>
          <select
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value))}
            className="room-availability__select"
          >
            <option value="1">1 room</option>
            <option value="2">2 rooms</option>
            <option value="3">3 rooms</option>
            <option value="4">4 rooms</option>
            <option value="5">5 rooms</option>
            <option value="6">6 rooms</option>
          </select>
        </div>

        <button type="submit" className="room-availability__submit">
          Check Availability
        </button>
      </form>
    </div>
  );
}

export default Rooms
import Navbar from './Components/Navbar/Navbar.jsx';
// import Header from './Components/Header/Header.jsx';
import  Rooms from'./Components/Rooms/Rooms.jsx';
import Overview from './Components/Overview/Overview.jsx';
import MainAmenities from './Components/Amenities/MainAmenities.jsx';
import MainLoc from './Components/Location/MainLoc.jsx';
import MainPolicies from './Components/Policies/MainPolicies.jsx';
import Images from './Components/Carousel/Images.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';




function App() {
  return (
    <Router>
    <Navbar/>
    {/* <Header/> */}
    <Images/>
    <Overview/>
    <Rooms/>
    <MainLoc/>
    <MainAmenities/>
    <MainPolicies/>
    </Router>
  );
}

export default App;

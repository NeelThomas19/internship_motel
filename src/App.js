import Navbar from './Components/Navbar/Navbar.jsx';
// import Header from './Components/Header/Header.jsx';
import  Rooms from'./Components/Rooms/Rooms.jsx';
import Overview from './Components/Overview/Overview.jsx';
import Amenities from './Components/Amenities/Amenities.jsx';
import MainLoc from './Components/Location/MainLoc.jsx';
import Policies from './Components/Policies/Policies.jsx';
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
    <Amenities/>
    <Policies/>
    </Router>
  );
}

export default App;

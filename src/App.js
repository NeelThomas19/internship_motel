import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import  Rooms from'./Components/Rooms/Rooms.jsx';
import Overview from './Components/Overview/Overview.jsx';
import Amenities from './Components/Amenities/Amenities.jsx';
import Location from './Components/Location/Location.jsx';
import Policies from './Components/Policies/Policies.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar/>
    <Header/>
    <Overview/>
    <Rooms/>
    <Location/>
    <Amenities/>
    <Policies/>
    </Router>
  );
}

export default App;

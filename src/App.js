import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import  Rooms from'./Components/Rooms/Rooms.jsx';
import Overview from './Components/Overview/Overview.jsx';
import Amenities from './Components/Amenities/Amenities.jsx';
import Location from './Components/Location/Location.jsx';
import Policies from './Components/Policies/Policies.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Overview/>
    <Rooms/>
    <Location/>
    <Amenities/>
    <Policies/>
    </div>
  );
}

export default App;

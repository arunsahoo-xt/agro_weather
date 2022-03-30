import Polygon from './component/Polygon';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowMap from './component/ShowMap';
import Weather from './component/Weather';
import Login from './component/loginss/Login';
import Register from './component/loginss/Register';

import "./App.css";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import Contact from './component/loginss/Contact';
import RegisterScreen from './component/loginss/RegisterScreen';
import FiveDaysForecast from './component/GraphicalData/FiveDaysForecast';
import Logins from './component/loginss/Logins';
import About from './component/loginss/About';
import Farmnotes from './component/Farmnotes';
import Information from './component/Information';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="app">
      <div className="stylebg">
      <Router>
      <Routes>
      <Route path="/" element={<RegisterScreen/>}/>
      <Route path="/login" element={<Login/>}/>
         <Route path="/weather" element={<Weather/>}/>
          <Route path="/weather/graph" element={<FiveDaysForecast/>}/>
          <Route path="/map" element={<ShowMap/>}/>
          <Route path="/create" element={<Contact/>}/>
          <Route path="/notes" element={<Farmnotes/>}/>
          <Route path="/info" element={<Information/>}/>
          <Route path="/deleting" element={<About/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
         
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;

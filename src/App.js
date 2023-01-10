import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import WeatherGame from './pages/WeatherGame';
// import YouTubeController from './pages/YouTubeController'
import RoommateBillSplit from './pages/RoommateBillSplit';
import ReactGA from 'react-ga4'


// Init Google Analytics
ReactGA.initialize([{ trackingId: "G-D9S1539Y82" }])



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='weather' element={<WeatherGame />}  />
        {/* <Route path='ytcontroller' element={<YouTubeController />}  />       */}
        <Route path='billsplit' element={<RoommateBillSplit />}  />      
        <Route path='*' element={<div><p>Page Not Found</p></div>} />

      </Routes>      
    </div>
  );
}

export default App;

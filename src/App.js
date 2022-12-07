import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import WeatherProject from './pages/WeatherProject';
import YouTubeController from './pages/YouTubeController'
import BillSplit from './pages/BillSplit';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='weather' element={<WeatherProject />}  />
        {/* <Route path='ytcontroller' element={<YouTubeController />}  />       */}
        <Route path='billsplit' element={<BillSplit />}  />      

      </Routes>      
    </div>
  );
}

export default App;

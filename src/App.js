import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import WeatherProject from './pages/WeatherProject';
import YouTubeController from './pages/YouTubeController'
import RoommateForm from './pages/RoommateForm';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='weather' element={<WeatherProject />}  />
        <Route path='ytcontroller' element={<YouTubeController />}  />      
        <Route path='multiform' element={<RoommateForm />}  />      

      </Routes>      
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "36abc8665aa95b85ff5f88f29d54cb88";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) =>{
    if(event.key === "Enter"){
      axios.get(url)
        .then((response) =>{
          console.log(response);
          setData(response.data)
          console.log(response.data);
        })
        setLocation("");
    }
  }
  return (
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input type="text" className='py-3 px-5 w-[700px] text-lg
        rounded-3xl border border-gray-200 text-gray-700
        placeholder:text-gray-400 focus:outline-none
        bg-white-300 shadow-md' 
        placeholder='enter location'
        value={location}
        onChange={(event)=>setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
         />
      </div>
      <div>
        <Weather weatherData = {data}/>
        </div>
    </div>
  )
}

export default App

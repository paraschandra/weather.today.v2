import React, {useState, useEffect, useRef} from 'react';
import searchWhite from './icons/search_white.svg';
import searchBlack from './icons/search_black.svg';

import Weather from './Weather';
import UIupdate from './UIupdate';

function App() {
  const [black, setBlack] = useState(false);
  const [weather, setWeather] = useState([{}]);
  const [main, setMain] = useState({});
  const [wind, setWind] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [timezone, setTimezone] = useState();
  const [city, setCity] = useState('');
  
  const inputRef = useRef()
  const cities = ['Mumbai', 'Chennai', 'New York', 'Paris']; 
  
  const getWeather = async (inputCity) => {
    try{
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then((response) => {
        if (!response.ok){
          alert('City not found! Try again');
          return
        }
        return response.json()})
        .then(data => {
          console.log(data);
          setTimezone(data.timezone);
          setCity(data.name);
          setWeather(data.weather);
          setMain(data.main);
          setWind(data.wind);
          setCloud(data.clouds);
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather('new delhi')
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const input = inputRef.current.value
    if (input === '') return
    getWeather(input)
    inputRef.current.value = null
  }

  return (
    <div className="main">
      <UIupdate weather = {weather}/>
      <Weather main = {main} weather = {weather} city = {city} time = {timezone}/>

      <div className="panel">
        <form id="inputLocation" onSubmit={handleSearch}>
          <input type="text" ref = {inputRef} className="search" placeholder="Search..."/>
          <button type="submit" className="submit" 
          onMouseEnter={() => setBlack(true)} 
          onMouseLeave={() => setBlack(false)}>
            <img src={black ? searchBlack : searchWhite} alt="search" id="submit" />
          </button>
        </form>

        <ul className="cities">
          {cities.map(city => 
          <li key = {city} className = {"city"} onClick = {(e) => {getWeather(e.target.innerHTML)}}>{city}</li>
          )}
        </ul>

        <ul className="details">
          <h4>Weather Details</h4>
          <li>
            <span>Feels Like</span>
            <span className="feels-like">{Math.round(main.feels_like)}°</span>
          </li>
          <li>
            <span>Cloudy</span>
            <span className="cloud">{cloud.all}%</span>
          </li>
          <li>
            <span>Humidity</span>
            <span className="humidity">{main.humidity}%</span>
          </li>
          <li>
            <span>Wind</span>
            <span className="wind">{wind.speed} km/h</span>
          </li>
        </ul>
        <div className="attribution">
          Design inspiration: <a href="https://dribbble.com/shots/7767460-Weather-App-Website" target={'_blank'} rel = "noreferrer">Arthur K </a> | 
          Coded by: <a href="https://github.com/paraschandra" target={'_blank'} rel = "noreferrer">Paras Chandra</a>
        </div>
      </div>
    </div>
  );
}

export default App;

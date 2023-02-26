import React from 'react'

const Weather = ({main, weather, city, time}) => {
    let d = new Date()
    let localTime = d.getTime()
    let localOffset = d.getTimezoneOffset() * 60000
    let utc = localTime + localOffset
    var timezone = utc + (1000 * time)
    let nd = new Date(timezone)

    let hh = nd.getHours();
    let mm = nd.getMinutes();
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[d.getDay()];
    const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    let month = months[d.getMonth()];
    let date = d.getDate();

    return (
        <div className="container">
            <h3 className="logo">weather.today</h3>
            <div className="weather-info">
              <h1 className="temp">{Math.round(main.temp)}°</h1>
              <div className="local-time">
                <h1 className="location">{city}</h1>
                <span className="time">{hh+":"+mm} </span>
                -
                <span className="date"> {day+" "+month+" "+date}</span>
              </div>
              <div className="weather">
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
                alt="icon" className="icon" id="icon" width="50" height="50"/>
                <span className="condition">{weather[0].main}</span>
              </div>
            </div>
        </div>
    )
}

export default Weather;
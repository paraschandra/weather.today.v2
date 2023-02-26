import React from 'react'
import day800 from './images/day/clear.webp';
import night800 from './images/night/clear.webp';
import day801 from './images/day/cloudy.webp';
import night801 from './images/night/cloudy.webp';
import day200 from './images/day/rain.webp';
import night200 from './images/night/rain.webp';
import day701 from './images/day/atmosphere.webp';
import night701 from './images/night/atmosphere.webp';
import daySnow from './images/day/snow.webp';
import nightSnow from './images/night/snow.webp';

const UIupdate = ({weather}) => {
    const app = document.querySelector('.main');
    const btn = document.querySelector('.submit');
    if (weather[0].icon !== undefined) {
        var code = weather[0].id;
        let day_night = weather[0].icon;
        
        let timeOfDay = "day";
        if(day_night[2] !== "d"){
            timeOfDay = "night";
        }
    
        if (code === 800) {
            app.style.backgroundImage = `url(${day800})`;
            btn.style.background = "#4798d5";
            if(timeOfDay === "night"){
                app.style.backgroundImage = `url(${night800})`;
                btn.style.background = "#323a70";
            }
        }
        else if (code === 801 || code === 802 || code === 803 || code === 804 || code === 781) {
            app.style.backgroundImage = `url(${day801})`;
            btn.style.background = "#fa6d1b";
            if(timeOfDay === "night"){
                app.style.backgroundImage = `url(${night801})`;
                btn.style.background = "#162739";
            }
        }
        else if(code === 200 || code === 201 || code === 202 || code === 210 || code === 211 || code === 212 || code === 221 || code === 230 || code === 231 || code === 232 || code === 300 || code === 301 || code === 302 || code === 310 || code === 311 || code === 312 || code === 313 || code === 314 || code === 321 || code === 500 || code === 501 || code === 502 || code === 503 || code === 504 || code === 511 || code === 520 || code === 521 || code === 522 || code === 531){
            app.style.backgroundImage = `url(${day200})`;
            btn.style.background = "#829f9a";
            if(timeOfDay === "night"){
                app.style.backgroundImage = `url(${night200})`;
                btn.style.background = "#182f43";
            }
        }
        else if(code === 701 || code === 711 || code === 721 || code === 731 || code === 741 || code === 751 || code === 761 || code === 762 || code === 771){
            app.style.backgroundImage = `url(${day701})`;
            btn.style.background = "#3e4038";
            if(timeOfDay === "night"){
                app.style.backgroundImage = `url(${night701})`;
                btn.style.background = "#1d5f7b";
            }
        }
        else{
            app.style.backgroundImage = `url(${daySnow})`;
            btn.style.background = "#80b9cc";
            if(timeOfDay === "night"){
                app.style.backgroundImage = `url(${nightSnow})`;
                btn.style.background = "#838c95";
            }
        }
    }
    
    return (
        <></>
    )
}

export default UIupdate;
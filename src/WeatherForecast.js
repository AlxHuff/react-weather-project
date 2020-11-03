import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";


export default function WeatherForecast(props){

const [loaded, setLoaded]=useState(false);
const [forecast, setForecast]=useState(null);

    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);

        console.log(response.data);
    }
    
if(loaded) {
  return (
  
  <div className="WeatherForecast">
      <div className="forecastCard">
     <div className= "row" id="time"><strong>10:00</strong></div>
     <br/>
     <WeatherIcon classname="icon" code={forecast.list[0].weather[0].icon}/>
    <strong id="forecast-temp">{Math.round(forecast.list[0].main.temp)}°C</strong>
    
       
      </div>
        
  </div>
  );
} 

else {
    let apiKey = "36616c1d79a2b7725ac3053f800c78b3";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
   
    return null;

}

}
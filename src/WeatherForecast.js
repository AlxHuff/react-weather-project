import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview.js";
import axios from "axios";


export default function WeatherForecast(props){

const [loaded, setLoaded]=useState(false);
const [forecast, setForecast]=useState(null);

    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }
    
if(loaded && props.city === forecast.city.name) {
  return (
  
  <div className="WeatherForecast row">
          <WeatherForecastPreview data={forecast.list[0]}/>
          <WeatherForecastPreview data={forecast.list[1]}/>
          <WeatherForecastPreview data={forecast.list[2]}/>
          <WeatherForecastPreview data={forecast.list[3]}/>
          <br/>
          <WeatherForecastPreview data={forecast.list[4]}/>
          <WeatherForecastPreview data={forecast.list[5]}/>
          <WeatherForecastPreview data={forecast.list[6]}/>
          <WeatherForecastPreview data={forecast.list[7]}/>
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
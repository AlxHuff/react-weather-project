import React, {useState} from 'react';
import './Weather.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather (props){
    
    const[weatherData, setWeatherData]= useState({});
    
    function handleResponse(response){
   
     setWeatherData({
        ready: true,
        temperature:response.data.main.temp, 
        wind:response.data.wind.speed, 
        city:response.data.name,
        humidity: response.data.main.humidity,
        description:response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        date: new Date (response.data.dt * 1000) });}

function handleSubmit(event){
    event.preventDefault();
    
}

if(weatherData.ready){
   
    return(
        
        <div className="Weather">
           
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Golden Hour Weather</a>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
 
    <div className="row">
    <WeatherInfo data = {weatherData}/>
    <iframe className="music" src="https://open.spotify.com/embed/album/7f6xPqyaolTiziKf5R5Z0c" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    
         </div>);
    } 
    
    else {  
    const apiKey="36616c1d79a2b7725ac3053f800c78b3";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
    
    return "Loading..."; }

} 

    


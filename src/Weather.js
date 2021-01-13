import React, {useState} from 'react';
import './Weather.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";



export default function Weather (props){
    
    const[city, setCity]=useState(props.defaultCity);
    const[weatherData, setWeatherData]= useState({ready:false});
    
    function handleResponse(response){
   
     setWeatherData({
        ready: true,
        temperature:response.data.main.temp, 
        wind:response.data.wind.speed, 
        city:response.data.name,
        humidity: response.data.main.humidity,
        description:response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: new Date (response.data.dt * 1000) });}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
setCity(event.target.value);

}

function search(){
    const apiKey="36616c1d79a2b7725ac3053f800c78b3";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
}

if(weatherData.ready){
   
    return(
        
        <div className="Weather">
           
    <nav className="navbar navbar-light bg-light justify-content-between">
      <h1 className="navbar-brand">Golden Hour Weather</h1>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="search"  aria-label="Search" onChange={handleCityChange}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search City</button>
      </form>
    </nav>
 
    <div className="row">
    <WeatherInfo data = {weatherData}/>
    </div>
 <br/>
    <WeatherForecast city={weatherData.city}/>  
    
         </div>);
    } 
    
    else {  
    search();
    return "Loading..."; }

} 

    


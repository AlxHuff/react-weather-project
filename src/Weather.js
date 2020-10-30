import React, {useState} from 'react';
import './Weather.css';
import axios from "axios";

export default function Weather (){

   
    const[ready, setReady]=useState(false);
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
        date:"Wednesday 07:00" });}
    

if(weatherData.ready){
   
    return(
        
        <div className="Weather">
           
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Golden Hour Weather</a>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    
    <div className="row"><iframe className="music" src="https://open.spotify.com/embed/album/7f6xPqyaolTiziKf5R5Z0c" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    <div className="weather-card-main">
    
         <h1 className = "weather-title"><strong>{weatherData.city}</strong></h1>
        
         <ul id="date-description">
             <em> 
            <li>{weatherData.date},</li>
            <li className="text-capitalize"> {weatherData.description}</li>
            </em>
         </ul>
        
        <div className ="row">
                <div className="col-6">
                    <div className="clearfix">
                 <img className="float-left" src={weatherData.iconUrl} alt={weatherData.description}/>
                 <div className = "float-right">
                 <h1 id="main-temp">{Math.round(weatherData.temperature)}° <span id="celsius">C | F</span></h1>
                 </div>
                 </div>
                </div>
    
                <div className="col-6">
                    <strong>
                    <ul id ="weather-list">
                     <li>Percipitation: 15%</li><br/>
                     <li>Humidity: {weatherData.humidity}%</li><br/>
                     <li>Wind: {weatherData.wind} km/hr</li><br/>
                     </ul>
                    </strong>
                </div>
        </div>
    
    </div>
    </div>
    
        
        </div>);
    } 
    
    else {  
    const apiKey="36616c1d79a2b7725ac3053f800c78b3";
    let city = "London";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
    
    return "Loading..."; }

} 

    


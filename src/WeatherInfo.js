import React from "react";
import FormattedDate from "./FormattedDate.js";



export default function WeatherInfo(props){
    return (
    
    <div className="weather-card-main">
  
    <h1 className = "weather-title"><strong>{props.data.city}</strong></h1>
        
         <ul id="date-description">
           <em> 
            <li>
                <FormattedDate date={props.data.date}/>
            </li>
            <li className="text-capitalize"> {props.data.description}</li>
           </em>
         </ul>
        
        <div className ="row">
                <div className="col-6">
                    <div className="clearfix">
                 <img className="float-left" src={props.data.iconUrl} alt={props.data.description}/>
                 <div className = "float-right">
                 <h1 id="main-temp">{Math.round(props.data.temperature)}° <span id="celsius">C | F</span></h1>
                 </div>
                 </div>
                </div>
    
                <div className="col-6">
                    <strong>
                    <ul id ="weather-list">
                     <li>Percipitation: 15%</li><br/>
                     <li>Humidity: {props.data.humidity}%</li><br/>
                     <li>Wind: {Math.round(props.data.wind)} km/hr</li><br/>
                    </ul>
                    </strong>
                </div>
        </div>
   
    </div>
    );}
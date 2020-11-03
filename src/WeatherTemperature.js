
import React, {useState} from "react";



export default function WeatherTemperature(props){
   
    const [unit, setUnit]=useState("celsius");
    
    function convertToFarenheit(event){
       event.preventDefault();
       setUnit("farenheit");
    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

 
       
    if(unit==="celsius"){
        return(
            <div>
                <h1 className="temperature" id="main-temp">{Math.round(props.celsius)}  
                <space/>
                <space/>
                <span className="unit" id="celsius">
                    <a href = "/" onClick={convertToCelsius}>  °C</a></span>
                <span id="slash"> | </span>
                <span className="unit" id="farenheit">
                    <a href = "/" onClick={convertToFarenheit}>°F</a>
                </span>
                </h1>
            </div>
            );   
    }

    else{
        let farenheit = (props.celsius * 9) / 5 + 32;
        return(
            <div>
                <h1 className="temperature" id="main-temp">{Math.round(farenheit)}  
                <space/>
                <space/>
                <span className="unit" id="celsius">
                    <a href = "/"  rel="noopener noreferrer" onClick={convertToCelsius}>  °C</a></span>
                <span id="slash"> | </span>
                <span className="unit" id="farenheit">
                    <a href = "/" onClick={convertToFarenheit}  rel="noopener noreferrer">°F</a>
                </span>
                </h1>
            </div>
            );   
    }
    

}


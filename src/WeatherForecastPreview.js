import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon.js";



export default function WeatherForecastPreview(props){

function hours () {
    let date = new Date (props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
}

function temperature (){
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
}

   return(<div className="forecastCard">
   <span id="time">
       <strong>{hours()}</strong>
   </span>
<br/>
<WeatherIcon classname="icon" code={props.data.weather[0].icon}/>
<strong id="forecast-temp">{temperature()}</strong>
</div>
); 
}
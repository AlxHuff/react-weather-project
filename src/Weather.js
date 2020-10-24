import React from 'react';
import './Weather.css';

export default function Weather (){
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

     <h1 className = "weather-title">New York</h1>
    
     <ul>
         <li>Wednesday 07:00</li>
         <li>Mostly Cloudy</li>
     </ul>
    
    <div className ="row">
            <div className="col-6">
             <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"alt="mostly cloudy"/>
            </div>
             <div className="col-6">
                 <ul>
                 <li>Percipitation: 15%</li>
                 <li>Humidity: 72%</li>
                 <li>Wind: 13 km/hr</li>
             </ul>
            </div>
    </div>

</div>
</div>

    
    </div>)
}
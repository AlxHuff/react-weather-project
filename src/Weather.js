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

     <h1 className = "weather-title"><strong>New York</strong></h1>
    
     <ul id="date-description">
         <em> 
        <li>Wednesday 07:00,</li>
        <li> Mostly Cloudy</li>
        </em>
     </ul>
    
    <div className ="row">

            <div className="col-6">
                <div className="clearfix">
             <img className="float-left" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"alt="mostly cloudy"/>
             <div className = "float-right">
             <h1 id="main-temp">90° <span>C | F</span></h1>
             </div>
             </div>
            </div>

            <div className="col-6">
                <strong>
                <ul id ="weather-list">
                 <li>Percipitation: 15%</li><br/>
                 <li>Humidity: 72%</li><br/>
                 <li>Wind: 13 km/hr</li><br/>
                 </ul>
                </strong>
            </div>
    </div>

</div>
</div>

    
    </div>)
}
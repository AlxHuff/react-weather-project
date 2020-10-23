import React from 'react';
import './App.css';
import Weather from "./Weather.js";


function App() {
  return (
    <div className="App">
      
    <Weather/>
     <footer>
       This project was coded by Alex Huffman and is 
       <a href="https://github.com/AlxHuff/react-weather-project" 
       target="_blank"> open-sourced on Github</a>
     </footer>
    </div>
  );
}

export default App;

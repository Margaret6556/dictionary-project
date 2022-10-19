import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo2.png";


export default function App() {
  return (

    <div className="App">
      <div className="container">
        <header className="App-header">     
          <img src={logo}  className="logo" alt="Margaret logo" />
          <p> Medical Terminologies doesn't have to be so  confusing!</p>
          <h2> Welcome to your </h2>
           <h1 className={App.h1}> Modern Medical Dictionary </h1>
        </header>

          <Dictionary />
        
        <footer className="App-footer">
          <small>
            Coded by <a href="https://www.margaretcezar.com"> Margaret Cezar </a>{" "}
          </small>
        </footer>
      </div>
      
   </div>
  
   );
  }
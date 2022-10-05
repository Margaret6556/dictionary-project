import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src="./src/logo.png" className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <a href="https://www.margaretcezar.com"> </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

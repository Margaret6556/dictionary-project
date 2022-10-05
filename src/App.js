import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <a href="https://www.margaretcezar.com" target="_blank" rel="noreferrer"><img src="/logo.png" className="logo" alt="Margaret logo" > </img> </a>
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

import React, { useState } from "react";
import axios from "axios";

export default function Dictionary () {
const [definition, setDefinition] = useState("");
const [results, setResults] = useState (null);
 
function handleSubmit(event) {
 event.preventDefault();
}

 function handleResponse(response) {
  setDefinition (response.data[0]);
 }
 
 function search (event) {
  event.preventDefault ();  
 }

 let apiKey="cd32822f9e64e59f7e2528e37e7549fa"
 let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
 axios.get(apiUrl).then(handleResponse);

 
 return (
  <div className="Dictionary">
  <div className="container">
 
  <header className="App-header">
 </header> 

 <main> 
  <p> Medical Terminologies Doesn't have to be so confusing!<span role="img" aria-label="enpm run builmoji"> 🤯 </span></p>
  <h2> Welcome to your </h2>
  <h1> Modern Medical Dictionary </h1>
 </main>

  <form onSubmit={handleSubmit}>
  <input type="search /"> </input> onClick={setDefinition};
  </form>

  </div>
  </div>
 );
}

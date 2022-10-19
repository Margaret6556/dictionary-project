import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState (null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    //documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log({apiUrl})
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="mb-3" onSubmit={search}>
        <input type="text" placeholder="Type your word" id="search " onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
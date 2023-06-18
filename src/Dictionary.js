import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults (response.data[0]);
  }
  function search(event) {
    event.preventDefault();

//temporary API source: https://www.shecodes.io/learn/apis/dictionary/

    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/medical/json/${keyword}?key=39284b94tea8fb240cc5d3o3a355d5a0`;
    axios.get(apiUrl).then(handleResponse);
}

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="mb-3" onSubmit={search}>
        <input
          className="input-search"
          type="text"
          placeholder="Type your word"
          id="search "
          onChange={handleKeywordChange}
        />
        
      </form>
      <Results results={results} />
    </div>
  );
}

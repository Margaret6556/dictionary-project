import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import { InputGroup } from "react-bootstrap";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    //documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <InputGroup className="mb-3" onSubmit={search}>
        <Form.Control 
        placeholder="Search your medical word">
        </Form.Control>    
        <InputGroup.Text id="search " onChange={handleKeywordChange} />
      </InputGroup>
    </div>
  );
}

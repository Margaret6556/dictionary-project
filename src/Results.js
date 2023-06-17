import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    console.log (props.Results);
    return (
      <div className="Results">
        <h2> {props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic,index){
          return (
            <div key={index}>
              <phonetics phonetic={phonetic} />
              </div>
          )
        })}
        {props.results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <Meanings meanings={meanings} />
              </div>
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}
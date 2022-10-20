import React from "react";
import Meanings from "./Meanings";

export default function Results (props) {
    if (props.results){
    return (
        <div className="Results">
            <h2> {props.results.word}</h2>
            {props.results.definition.map (function (definition, index){
                return (
                    <div key={index}>
                    <Meanings meanings={Meanings} />
                    </div>
                );
            })}
            </div>)
     } else {
        return null;
    }
}
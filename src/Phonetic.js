import React from "react";

export default function Phonetic (props) {
    return (
       <div className="Phonetic" >
        < a href={props.phonetics.audio} target="blank">
            Listen</a>
            <br />
            {props.phonetics.text}        
        </div>
    );
}
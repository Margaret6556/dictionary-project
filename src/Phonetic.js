import React from "react";

export default function Phonetic (props) {
    console.log (props.phonetic);
    return (
       <div> className="Phonetic"
        < a href={props.phonetics.audio} target="blank">
            Listen</a>
            <br />
            {props.phonetic.text}        
        </div>
    )

}
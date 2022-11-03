import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings (props) {
    console.log (props.meanings);
    return (
        <div className="Meanings">
            <h3>{props.meanings.PartOfSpeech}</h3>;
            {props.meanings.definitions.map (function (definition, index) {
            return (
                <div key={index}>
                    <p>
                        <strong>Definition: </strong>
                       
                        {definition.definition}
                        <br />

                        <Synonyms synonyms={synonyms}   
                    </p>
                </div>
                     );
})};
        </div>
    )
}
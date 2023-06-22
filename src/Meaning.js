import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    console.log(props.meanings);
    return (
        <div className="Meanings">
            <h3>{props.meaning.partOfSpeech}</h3>;
            <div>
                <p>
                    <strong>Definition: </strong>

                    {props.meaning.definition}
                    <br />

                    <Synonyms synonyms={props.meaning.synonyms} />
                </p>
            </div>
        </div>
    )
}
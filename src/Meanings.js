import React from "react";

export default function Meanings (props) {
    console.log (props.meanings);
    return (
        <div className="Meanings">
            <h3>{props.meanings.PartOfSpeech}</h3>;
            {props.meanings.definitions.map (function (definition, index) {
            return (
                <div key={index}>
                    <p>
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                    </p>
                </div>
            );
})};
        </div>
    )
}
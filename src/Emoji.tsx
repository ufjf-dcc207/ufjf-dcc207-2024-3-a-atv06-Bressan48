import "./Emoji.css";
import { useState } from "react";

const EMOJIS = new Map <string, string> ([
    ["feminine", "👢"],
    ["hiking", "🥾"],
    ["ski", "🎿"],
]);
// EMOJIS.set("feminina,"👢");

export default function Emoji (){
    let estado = "pluh";

    function toFeminine(){
        estado = "feminine";
    }
    function toHiking(){
        estado = "hiking";
    }
    function toSki(){
        estado = "ski";
    }

    return <div className="emoji"> 
        <div className="face">{EMOJIS.get(estado) || "🪇"}</div> 
        <div className="actions">
            <button onClick={toFeminine}> Bota Feminina </button>
            <button onClick={toHiking}> Bota de Escalada </button>
            <button onClick={toSki}> Bota de Ski </button>

        </div>
    </div>
    
}

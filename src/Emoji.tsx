import "./Emoji.css";
import { useState } from "react";

const EMOJIS = new Map <string, string> ([
    ["feminine", "👢"],
    ["hiking", "🥾"],
    ["ski", "🎿"],
]);
// EMOJIS.set("feminina,"👢");

export default function Emoji (){

    //utilização do useState
    const [estado, setEstado] = useState("clear");

    function toFeminine(){
        setEstado("feminine");
    }
    function toHiking(){
        setEstado("hiking");
    }
    function toSki(){
        setEstado("ski");
    }

    //funcao para ciclar emojis
    function toNext(){
        const states = ["clear", "feminine", "hiking", "ski"];
        if (estado == "clear")
        {
            setEstado("feminine");
        }
        else if (estado == "feminine")
        {
            setEstado("hiking");
        }
        else if (estado == "hiking")
        {
            setEstado("ski");
        }
        else if (estado == "ski")
        {
            setEstado("clear");
        }
    }

    //funcao para ciclar correta
    function cicle() {
        switch (estado) {
            case "clear":
                setEstado("feminine");
                break;
            case "feminine":
                setEstado("hiking");
                break;
            case "hiking":
                setEstado("ski");
                break;
            case "ski":
                setEstado("clear");
                break;
        }
    }

    return <div className="emoji"> 
        <div className="face">{EMOJIS.get(estado) || "🪇"}</div> 
        <div className="actions">
            <button onClick={toFeminine}> Bota Feminina </button>
            <button onClick={toHiking}> Bota de Escalada </button>
            <button onClick={toSki}> Bota de Ski </button>
            <button onClick={cicle}> Próximo </button>
        </div>
    </div>
    
}

import "./Emoji.css";
import { useState } from "react";



const EMOJIS = new Map <string, string> ([
    ["alive", "😃"],
    ["dead", "😵"],
    ["sick", "🤒"],
]);


export default function Emoji (){

    //utilização do useState
    const [estado, setEstado] = useState("clear");

    function toAlive(){
        setEstado("alive");
    }
    function toDead(){
        setEstado("dead");
    }
    function toSick(){
        setEstado("sick");
    }

    //funcao para ciclar correta
    function cicle() {
        switch (estado) {
            case "clear":
                setEstado("alive");
                break;
            case "alive":
                setEstado("dead");
                break;
            case "dead":
                setEstado("sick");
                break;
            case "sick":
                setEstado("clear");
                break;
        }
    }

    return <div className="emoji"> 
        <div className="face">{EMOJIS.get(estado) || "🐲"}</div> 
        <div className="actions">
            <button onClick={toAlive}> Bicho Vivo </button>
            <button onClick={toDead}> Bicho Morto </button>
            <button onClick={toSick}> Bicho Doente </button>
            <button onClick={cicle}> Próximo </button>
        </div>
    </div>
    
}

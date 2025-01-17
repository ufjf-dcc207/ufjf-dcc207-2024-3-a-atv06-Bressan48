import "./Emoji.css";
import Atributo from "./Atributo";
import { useState } from "react";



const EMOJIS = new Map <string, string> ([
    ["alive", "😃"],
    ["dead", "😵"],
    ["sick", "🤒"],
]);


export default function Emoji (){

    //utilização do useState
    const [situacao, setSituacao] = useState("clear");
    const [saude, setSaude] = useState(4);
    const [energia, setEnergia] = useState(3);
    const [comida, setComida] = useState(2);
    const [agua, setAgua] = useState(1);
    const [luz, setLuz] = useState(true);





    function onAlimentar() {
        setComida(Math.min(comida+1,5));
    }
    function onHidratar() {
        setAgua(Math.min(comida+1,5));
    }
    function onLigaDesligaLuz() {
        setLuz(!luz);
    }


    //funcao para ciclar correta
    function onCiclo() {
        setComida(Math.max(0,comida - 1));
        setAgua(Math.max(0,agua - 1));
        setEnergia(Math.max(0,energia - 1));
        setSaude(Math.max(0,saude - 1));

        if (luz)
        {
            setEnergia(Math.max(0, energia - 1));
        }
        else 
        {
            setEnergia(Math.min(5, energia - 1));
        }

        if (comida === 0)
        {
            setSaude(s => (Math.max(0,s-1) ));
        }

        if (agua === 0)
        {
            setSaude(s => (Math.max(0,s-1) ));
        }

        if (energia === 0)
        {
            setSaude(s => (Math.max(0,s-1) ));
        }
    }

    return <div className="emoji"> 
        <div className="situacao">{EMOJIS.get(situacao) || "🐲"}</div> 
        <div className="atributos">
            <Atributo icone="❤️" valor={saude}/>
            <Atributo icone="⚡" valor={energia}/>
            <Atributo icone="🍗" valor={comida}/>
            <Atributo icone="🥤" valor={agua}/>
            <span style={{filter: luz?"":"grayscale(100%)"}}>
                💡
            </span>     
        </div>
        <div className="acoes">
            <button onClick={onAlimentar}> Dar comida </button>
            <button onClick={onHidratar}> Dar água </button>
            <button onClick={onLigaDesligaLuz}> {luz ? "Apagar" : "Acender"} a luz </button>
            <button onClick={onCiclo}> Ciclo </button>
        </div>
    </div>
    
}

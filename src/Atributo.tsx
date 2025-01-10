import "./Atributo.css";
import { useState } from "react";

type AtributoProps =
{
    icone: string;
}
export default function Atributo ({icone} : AtributoProps ){

    const [valor, setValor] = useState(5);
    
    function onMenosClick()
    {
        if(valor == 0)
        {
            setValor(5);
        }
        else
        {
            setValor(valor - 1);
        }

    }




    return <div className="atributo"> 
        <span>{icone.repeat(valor)}</span>
        <span className="inativo">{icone.repeat(5-valor)}</span>
        <button onClick={onMenosClick}>-</button>
    </div>

}
import "./Emoji.css";

const EMOJIS = new Map <string, string> ([
    ["feminina", "👢"],
    ["escalada", "🥾"],
    ["ski", "🎿"],
]);
// EMOJIS.set("feminina,"👢");

export default function Emoji (){
    let situacao = "skis";
    return <div className="emoji"> {EMOJIS.get(situacao) || "🪇"} </div>
}

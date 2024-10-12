"use client"
function nueva(){
    console.log("Nueva noticia");
}
export default function Boton(){
    return(
        <div>
        <button onClick={nueva}>Nueva noticia</button>
        </div>
    );
}
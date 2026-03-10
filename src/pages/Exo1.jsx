import '../style/style.css'
import { useState } from 'react';

const Exo1 = () => {
const [color, setColor]= useState("");
const [histoColor, setHistoColor]= useState([]);    
return <>

<button onClick={()=>{setColor("#"+(Math.random()*0xFFFFFF<<0).toString(16)), setHistoColor([...histoColor, color])}}>Générer une couleur</button>
{/* [...histoColor] => copier toutes les valeurs de histoColor dans mon nouveau tableau, les "..." dupliquent les valeurs d'une variable */}
<button onClick={()=>{ navigator.clipboard.writeText(color)}}>Copier la Couleur</button>
<div style={{ backgroundColor: color, width: "100px", height: "100px" }}
>{color}</div>

  {histoColor.map((element) => {
  return <li  style={{backgroundColor: element}}>{element}</li> })}
</>

 
}

export default Exo1 
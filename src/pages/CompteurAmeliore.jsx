import '../style/style.css'
import { useEffect, useState } from 'react';

const CompteurAmeliore = () => {

    const [resultat, setResultat] = useState(0)
    const [history,setHistory]= useState ([])
    const [click,setClick]=useState(0)

    return <>
        <h3>Nombre de click: {click}</h3>
        <h3 style={{ color: resultat > 10 ? "#eb0a0a" : "#ffffff" }}>  {resultat} </h3>

        <button onClick={() => { setResultat(resultat + 1);setHistory([...history,resultat]);setClick(click+1) }}>+1</button>
        <button onClick={() => {
            if ((resultat - 1) < 0) {
                return;
            } else {
                setResultat(resultat - 1);
                setHistory([...history,resultat]);
                setClick(click+1)
            }
        }}>-1</button>
      
        <button onClick={() => { setResultat(0); setHistory([]);setClick(0) }}>R E S E T</button>
        <button onClick={()=> { 
            if (history.length > 0){
            setResultat(history.pop())}} }
            
            >Annuler dernier</button>

        {history.map((element) => {
  return <li >{element}</li> })}
 

    </>
}
export default CompteurAmeliore;
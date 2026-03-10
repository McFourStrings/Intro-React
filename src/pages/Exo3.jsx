import '../style/style.css'
import { useEffect, useState } from 'react';

const Exo3 = () => {

    const [resultat, setResultat] = useState(0)

    return <>

        <h3 style={{ color: resultat > 10 ? "#eb0a0a" : "#ffffff" }}>  {resultat} </h3>

        <button onClick={() => { setResultat(resultat + 1) }}>+1</button>
        <button onClick={() => {
            if ((resultat - 1) < 0) {
                return;
            } else {
                setResultat(resultat - 1)
            }
        }}>-1</button>
        <button onClick={() => { setResultat(resultat + 10) }}>+10</button>
        <button onClick={() => {
            if ((resultat - 10) < 0) {
                return;
            } else {
                setResultat(resultat - 10)
            }
        }}>-10</button>
        <button onClick={() => { setResultat(0) }}>R E S E T</button>

    </>
}
export default Exo3;
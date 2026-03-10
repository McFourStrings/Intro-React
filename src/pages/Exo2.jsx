import '../style/style.css'
import { useEffect, useState } from 'react';

const Exo2 = () => {
    const [essai, setEssai] = useState(0);
    const [nombreAleatoire, setNombreAleatoire] = useState(Math.floor(Math.random() * (100 - 1) + 1))
    // Ou bien :
    // useEffect(() => {
    //     const nombreAleatoire = Math.floor(Math.random() * (100 - 1) + 1)
    //     console.log(nombreAleatoire);
    // },[] )
    const [tentative, setTentative] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTentative(tentative + 1);
        if (essai == nombreAleatoire) {
            alert("Gagné !!")
            setNombreAleatoire(Math.floor(Math.random() * (100 - 1) + 1))
            setTentative(0)
        } else if (essai > nombreAleatoire) {
            alert("Trop grand!")
        } else {
            alert("Trop petit!")
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input style={{ width: "150px" }} type='number' min={0} max={100} step={1}
                value={essai != 0 && essai} onChange={(e) => { setEssai(e.target.value) }} />
            {/* essai != 0 && essai equivalent de if essai!= 0 return essai */}
            <input type='submit' value="Tentez votre chance!" style={{ width: "200px" }} />
        </form>

        <h3 style={{ color: "#ffffff" }}>Tentatives: {tentative}</h3>


    </>



}
export default Exo2;
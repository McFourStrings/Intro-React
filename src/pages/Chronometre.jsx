import '../style/style.css'
import { useEffect, useState } from 'react';
const Chronometre = () => {

    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
  

    useEffect(() => {
        let interval
        if (isRunning) {
            // Ici je recupère l'ancienne valeur => et je lui ajoute 1
            interval = setInterval(() => { setSeconds((prev) => prev + 1) }, 1000)
        } return () => 
            clearInterval(interval);
        
    }, [isRunning])


    return <>
        <button disabled={isRunning} onClick={() => setIsRunning(true)}>Démarrer</button>
        <button disabled={!isRunning} onClick={() => setIsRunning(false)}>Arrêter</button>
        <button onClick={() => { setSeconds(0); setIsRunning(false) }}>Réinitialiser</button>
        <h1>{new Date(seconds*1000).toISOString().substring(14).substring(0,5)}</h1>
       {/* OU BIEN */}
        <h1>{String(Math.floor(seconds/60)).padStart(2,0)}:{String(seconds%60).padStart(2,0)}</h1>
    </>
}

export default Chronometre;
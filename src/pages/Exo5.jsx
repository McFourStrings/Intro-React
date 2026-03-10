import '../style/style.css'
import { useEffect, useState } from 'react';

const Exo5 = () => {
    const [celsius, setCelsius] = useState(0)
    const [farenheit, setFarenheit] = useState(32)
    const [inverser, setInverser] = useState(false)
    const [inputValue, setInputValue] = useState ("")



    return <>
        {!inverser ?
            <>
                <input value={inputValue} type='number' onChange={(e) => {setInputValue(Number(e.target.value)); setCelsius(Number(e.target.value)); setFarenheit((Number(e.target.value) * (9/5)) + 32) }}></input>
                <h3>{celsius.toFixed(2)}°C = {farenheit.toFixed(2)}°F</h3>

                <button onClick={() => { setInverser(true);setCelsius(-17.78);setFarenheit(0);setInputValue("") }}>Farenheint en Celsius</button>
            </>
            :
            <>


                <input value={inputValue} type='number' onChange={(e) => {setInputValue(Number(e.target.value)); setFarenheit(Number(e.target.value)), setCelsius((Number(e.target.value) - 32) * (5/9)) }}></input>
                <h3>{farenheit.toFixed(2)}°F = {celsius.toFixed(2)}°C</h3>

                <button onClick={() => { setInverser(false);setCelsius(0);setFarenheit(32);setInputValue("")  }}>Celsius en Farenheit</button>
            </>
        }

    </>
}
export default Exo5;
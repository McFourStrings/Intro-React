import '../style/style.css'
import { useState } from 'react';

const Calculatrice = () => {
    const [result, setResult] = useState("");
    // function Calculatrice(){}

    return <>
        <h2>Calculatrice</h2>

        <div id="result">{result == "" ? "0" : result}</div>
        <div className="row">
            {/* Sur chaque bouton faire un onClick qui ajoute la valeur associée à mon calcul */}

            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"7")}}>7</div>
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"8")}}>8</div>
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"9")}}>9</div>
            <div className="button buttonsSign characters" onClick={()=>{setResult(result+"-")}}>-</div>


        </div>
        <div className="row">
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"4")}}>4</div>
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"5")}}>5</div>
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"6")}}>6</div>
            <div className="button buttonsSign characters" onClick={()=>{setResult(result+"+")}}>+</div>


        </div>
        <div className="row">
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"1")}}>1</div>
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"2")}}>2</div>
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"3")}}>3</div>
            <div className="button buttonsSign characters" onClick={()=>{setResult(result+"*")}}>*</div>


        </div>
        <div className="row">
            <div className="button buttonsNumber characters" onClick={()=>{setResult(result+"0")}}>0</div>
            <div className="button buttonsSign characters" onClick={()=>{setResult(result+".")}}>.</div>
            <div className="button" id="reset" onClick={()=>{setResult("")}}>C</div>
            <div className="button buttonsSign characters" onClick={()=>{setResult(result+"/")}}>/</div>
        </div>
        <div className="row">
            <div className="button" id="delete" onClick={()=>{setResult(result.slice(0,-1))}}>Delete</div>
            <div className="button" id="equal" onClick={()=>{setResult(eval(result))}}>=</div>
        </div>


    </>




}
export default Calculatrice;
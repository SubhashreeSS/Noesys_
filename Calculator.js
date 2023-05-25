import React, {useState} from "react";
import './Calculator.css';

const Calculator = () =>{
    const[result, setResult] = useState("");

    const handleClick = (e)=>{
        setResult(result.concat(e.target.name));
    }

    const clear = () =>{
        setResult("");
    }

    const handleResult = () =>{
        setResult({result});
    }


    return (
        <>
            <div className="calculator">
                <form>
                    <input type="text" value={result} />

                </form>
                <br/>
                <button onClick={clear} className="btn" id="topOperation">C</button>
                <button onClick={handleClick} className="btn" id="topOperation">+/-</button>
                <button name="%" onClick={handleClick} className="btn" id="topOperation">%</button>
                <button name="÷" onClick={handleClick} className="btn" id="operation">÷</button>
                <br />
                <button name="1" className="btn" id="digit" onClick={handleClick}>1</button>
                <button name="2" className="btn" id="digit" onClick={handleClick}>2</button>
                <button name="3" className="btn" id="digit" onClick={handleClick}>3</button>
                <button name="x" onClick={handleClick} className="btn" id="operation">x</button>

                <br/>
                <button name="4" className="btn" id="digit" onClick={handleClick}>4</button>
                <button name="5" className="btn" id="digit" onClick={handleClick}>5</button>
                <button name="6" className="btn" id="digit" onClick={handleClick}>6</button>
                <button name="-" onClick={handleClick} className="btn" id="operation">-</button>

                <br/>
                <button name="7" className="btn" id="digit" onClick={handleClick}>7</button>
                <button name="8" className="btn" id="digit" onClick={handleClick}>8</button>
                <button name="9" className="btn" id="digit" onClick={handleClick}>9</button>
                <button name="+" onClick={handleClick} className="btn" id="operation">+</button>
                <br/>
                <button name="0" className="btnZ" id="digit" onClick={handleClick}>0</button>
                <button name="." className="btn" id="digit" onClick={handleClick}>.</button>
                <button className="btn" id="operation" onClick={handleResult}>=</button>

            </div>
        </>
    );

}
export default Calculator;



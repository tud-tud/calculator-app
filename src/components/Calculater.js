import React, { useState } from "react";

import "./Calcutor.css";

const Calculater = () => {
  const [inputValue, setInputValue] = useState("0");

  const matLength = 5;

  const display = (value) => {
    if (inputValue.toString().charAt(0) === "0") {
      setInputValue(value);
    } else {
      setInputValue(inputValue + value);
    }
  };

  const reset = () => {
    setInputValue("0");
  };

  const calculate = () => {
    let result = eval(inputValue);
    setInputValue(result);
  };

  return (
    <div className="calcutor">
      <div className="cal-display">
        <h1>{inputValue}</h1>
      </div>
      <div className="cal-btn">
        <button onClick={() => display("+")} className="operator">
          +
        </button>
        <button onClick={() => display("-")} className="operator">
          -
        </button>
        <button onClick={() => display("*")} className="operator">
          x
        </button>
        <button onClick={() => display("/")} className="operator">
          ÷
        </button>
        <button onClick={() => display("7")}>7</button>
        <button onClick={() => display("8")}>8</button>
        <button onClick={() => display("9")}>9</button>
        <button onClick={() => display("4")}>4</button>
        <button onClick={() => display("5")}>5</button>
        <button onClick={() => display("6")}>6</button>
        <button onClick={() => display("1")}>1</button>
        <button onClick={() => display("2")}>2</button>
        <button onClick={() => display("3")}>3</button>
        <button onClick={() => display(".")}>.</button>
        <button onClick={() => display("0")}>0</button>
        {/* <button onClick={()=> setInputValue('0')} className='cleabtn'>C</button> */}
        <button onClick={reset} className="cleabtn">
          C
        </button>
        <button onClick={calculate} className="equal operator">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculater;

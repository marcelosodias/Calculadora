import { useState } from "react";
import "./style.css";

function Home() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Calculadora</h1>
      <input type="text" value={input} readOnly className="calculator-display" />
      <div className="calculator-buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            className={`calculator-button ${["/", "*", "-", "+", "="].includes(char) ? "operator" : ""} ${
              char === "=" ? "equal" : ""
            }`}
          >
            {char}
          </button>
        ))}
        <button onClick={clearInput} className="calculator-button clear">
          C
        </button>
      </div>
    </div>
  );
}

export default Home;
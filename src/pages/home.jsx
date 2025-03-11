import { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900">Calculadora</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="w-64 p-2 text-xl text-right border border-gray-300 rounded mt-4"
      />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
          >
            {char}
          </button>
        ))}
        <button onClick={clearInput} className="col-span-4 p-4 bg-red-500 text-white rounded hover:bg-red-600">
          C
        </button>
      </div>
    </div>
  );
}

export default Home;
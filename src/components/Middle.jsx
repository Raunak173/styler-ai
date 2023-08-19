import React, { useState } from "react";
import sent from "../assets/sent.png";

const Middle = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    try {
      const result = await axios.post("/chatgpt", { prompt: input });
      setResponse(result.data.text);
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while processing your request.");
    }
  };
  return (
    <div
      style={{ backgroundColor: "#A8A8A8", minHeight: "100vh", width: "40%" }}
      className="flex flex-col items-center"
    >
      <p className="mt-5 font-bold text-4xl text-center">Styler.AI</p>
      {response !== "" && <p>{response}</p>}
      <div className="absolute bottom-10 flex items-center">
        <input
          className="bg-['#D9D9D9] w-[400px] h-[50px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button
          className="w-[50px] h-[50px] justify-center items-center flex bg-gray-400"
          onClick={handleSubmit}
        >
          <img src={sent} />
        </button>
      </div>
    </div>
  );
};

export default Middle;

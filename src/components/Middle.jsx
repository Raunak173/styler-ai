/* eslint-disable no-unused-vars */
import { useState } from "react";
import sent from "../assets/sent.png";
import axios from "axios";

const Middle = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const promptString = `You are a fashion recommender. Based on this message by user, find out the most relevant tag out of the options below. 
  The output MUST be only a comma seperated value string having most relevant tags.
  List of all fashion tags. "sweatshirt", "men", "shirt", "sweater", "hoodie", "jacket", "coat", "informal", "full-sleeve", "white", 
  "suit", "black", "cotton", "formal" "leather", "biking", "winter", "brown", "t-shirt", "half-sleeve", "red", "chequered", "blue",
  `

  const handleSubmit = async (e) => {
    try {
      const result = await axios.post("http://localhost:5000/api/generate", { 
        prompt: input + promptString,
        maxTokens: 2048 - input.length + promptString.length -10,
      });
      setResponse(result.data);
      console.log(result.data);
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while processing your request.");
      // set a fallback response, in case of error
      // set some default clothing tags
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

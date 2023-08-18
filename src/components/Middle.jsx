import React from "react";
import sent from "../assets/sent.png";

const Middle = () => {
  return (
    <div
      style={{ backgroundColor: "#A8A8A8", minHeight: "100vh", width: "40%" }}
      className="flex flex-col items-center"
    >
      <p className="mt-5 font-bold text-4xl text-center">Styler.AI</p>
      <div className="absolute bottom-10 flex items-center">
        <input className="bg-['#D9D9D9] w-[400px] h-[50px]" />
        <button className="w-[50px] h-[50px] justify-center items-center flex bg-gray-400">
          <img src={sent} />
        </button>
      </div>
    </div>
  );
};

export default Middle;

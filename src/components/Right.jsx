import React, { useState } from "react";

const Right = ({ vid, setVid }) => {
  return (
    <div
      style={{ backgroundColor: "white", minHeight: "100vh", width: "30%" }}
      className="flex flex-col gap-y-5 items-center pt-5"
    >
      {/* <p className="text-center font-bold text-3xl mt-5">3D Preview</p> */}
      {vid === null ? (
        <div className="h-[600px] w-[350px] bg-black mt-5 justify-center items-center flex">
          <p className="text-white text-xl">This is 3D try on</p>
        </div>
      ) : (
        <div className="w-[400px]">
          <video src={vid} autoPlay muted loop />
        </div>
      )}
      <button className="bg-[#EBE3BA] px-5 py-5 text-xl font-bold">
        Edit your 3D Avatar
      </button>
      <button className="bg-[#EBE3BA] px-5 py-5 text-xl font-bold">
        See on Flipkart
      </button>
    </div>
  );
};

export default Right;

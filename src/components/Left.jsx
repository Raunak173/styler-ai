import React from "react";
import FriendsCard from "./FriendsCard";

const Left = () => {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", width: "30%" }}>
      <h3 className="font-bold text-3xl p-5">Reccomendations</h3>
      <div className="flex flex-wrap gap-x-10 gap-y-7 justify-center my-7">
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: "red",
            borderStyle: "solid",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: "red",
            borderStyle: "solid",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: "red",
            borderStyle: "solid",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: "red",
            borderStyle: "solid",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: "red",
            borderStyle: "solid",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            borderWidth: 1,
            borderColor: "red",
            borderStyle: "solid",
          }}
        ></div>
      </div>
      <div className="flex flex-col mx-10 mt-10 gap-y-5">
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
        {/* <FriendsCard />
        <FriendsCard /> */}
      </div>
    </div>
  );
};

export default Left;

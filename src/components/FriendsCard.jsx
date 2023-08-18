import React from "react";

const FriendsCard = () => {
  return (
    <div className="flex items-center border px-5 py-5 border-black gap-x-7">
      <div className="w-[80px] h-[80px] rounded-full bg-[#D9D9D9]" />
      <div className="gap-y-3">
        <p className="text-2xl font-bold">Raunak Agarwal</p>
        <p>Recommends a jeans for you</p>
      </div>
    </div>
  );
};

export default FriendsCard;

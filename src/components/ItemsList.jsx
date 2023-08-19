import React, { useState } from "react";
import video1 from "../assets/clips/sweatshirt.mp4";
import video2 from "../assets/clips/black-coat.mp4";
import video3 from "../assets/clips/black-jacket.mp4";
import video4 from "../assets/clips/blue-coat.mp4";
import video5 from "../assets/clips/blue-shirt-jeans.mp4";
import video6 from "../assets/clips/brown-jacket.mp4";
import video7 from "../assets/clips/brown-t-half.mp4";
import video8 from "../assets/clips/hoddie-black-jacket.mp4";
import video9 from "../assets/clips/red-cheq-shirt-full.mp4";
import video10 from "../assets/clips/white-tshirt-black-jeans.mp4";

const data = [
  {
    name: "sweatshirt",
    tags: [
      "sweatshirt",
      "men",
      "shirt",
      "sweater",
      "hoodie",
      "jacket",
      "coat",
      "informal",
      "full-sleeve",
    ],
    video: video1,
    "flipkart-link": "https://dl.flipkart.com/s/6arpM3NNNN",
  },
  {
    name: "black-coat",
    tags: ["suit", "coat", "men", "black", "full-sleeve", "cotton", "formal"],
    video: video2,
    "flipkart-link": "https://dl.flipkart.com/s/6aYaRHNNNN",
  },
  {
    name: "black-jacket",
    tags: [
      "black",
      "leather",
      "jacket",
      "men",
      "full-sleeve",
      "informal",
      "biking",
      "winter",
    ],
    video: video3,
    "flipkart-link": "https://dl.flipkart.com/s/oOmAnyuuuN",
  },
  {
    name: "blue-coat",
    tags: ["suit", "coat", "men", "blue", "full-sleeve", "cotton", "formal"],
    video: video4,
    "flipkart-link": "https://dl.flipkart.com/s/6a3vX3NNNN",
  },
  {
    name: "blue-shirt-jeans",
    tags: ["blue", "shirt", "jeans", "cotton", "formal", "regular"],
    video: video5,
    "flipkart-link": "https://dl.flipkart.com/s/6aSztVNNNN",
  },
  {
    name: "brown-jacket",
    tags: [
      "brown",
      "jacket",
      "leather",
      "biking",
      "informal",
      "winter",
      "full-sleeve",
    ],
    video: video6,
    "flipkart-link": "https://dl.flipkart.com/s/6an5G3NNNN",
  },
  {
    name: "brown-t-half",
    tags: ["brown", "t-shirt", "half-sleeve", "informal", "cotton"],
    video: video7,
    "flipkart-link": "https://dl.flipkart.com/s/oOIPuGuuuN",
  },
  {
    name: "hoddie-black-jacket",
    tags: ["black", "jacket", "hoodie", "winter", "informal", "full-sleeve"],
    video: video8,
    "flipkart-link": "https://dl.flipkart.com/s/6a2Ps3NNNN",
  },
  {
    name: "red-cheq-shirt-full",
    tags: ["red", "shirt", "chequered", "full-sleeve", "cotton", "formal"],
    video: video9,
    "flipkart-link":
      "https://www.flipkart.com/indian-garage-co-men-checkered-casual-red-shirt/p/itm3448d64b72ae0?pid=SHTGGZYYJZPHP7KC",
  },
  {
    name: "white-tshirt-black-jeans",
    tags: [
      "white",
      "t-shirt",
      "black",
      "jeans",
      "informal",
      "cotton",
      "regular",
    ],
    video: video10,
    "flipkart-link": "https://dl.flipkart.com/s/oOfxJGuuuN",
  },
];

const ItemList = ({ filters, vid, setVid }) => {
  const cleanedFilters = filters.map((filter) =>
    filter.trim().replace(/\n/g, "")
  );

  console.log("Received filters:", cleanedFilters);

  const filteredItems = data.filter((item) =>
    item.tags.some((tag) => cleanedFilters.includes(tag))
  );

  console.log("Filtered items:", filteredItems);

  return (
    <div className="item-list flex flex-col gap-y-4 mt-10">
      {filteredItems.length === 0 ? (
        <p>No items match the selected filters.</p>
      ) : (
        filteredItems.map((item) => (
          <div
            className="item border bg-[#E1FFFF] flex justify-between"
            key={item?.name}
            style={{ borderRadius: "0px 15px 15px 15px" }}
          >
            <div className="flex flex-col justify-center items-center pl-10 gap-y-3">
              <h2 className="font-bold text-xl">
                Check this out : {item?.name}
              </h2>
              <button className="bg-[#EBE3BA] px-5 py-5 text-xl font-bold">
                <a
                  href={item["flipkart-link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flipkart Link
                </a>
              </button>
            </div>
            <button className=" w-[150px]" onClick={() => setVid(item?.video)}>
              <video src={item?.video} muted />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;

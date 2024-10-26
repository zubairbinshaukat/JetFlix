import React from "react";
import { FaPlay } from "react-icons/fa";

const Saved = () => {
  const nameShort = (name) => {
    if (name.length > 14) {
      return name.substring(0, 14) + "...";
    }
    return name;
  };
  return (
    <div className="w-full h-full backdrop-blur-lg bg-white/5 p-6 rounded-3xl overflow-y-scroll">
      <h1 className="text-white font-bold text-xl">Saved</h1>
      <div className="flex flex-col mt-4 gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/game-of-thrones-franchise-poster.jpg"
              alt=""
              className="w-16 h-20 rounded-lg"
            />
            <div>
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asd asd")}
              </h1>
              <p className="text-gray-300 text-sm">Season 8</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
            <FaPlay className="text-white " />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4 gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/game-of-thrones-franchise-poster.jpg"
              alt=""
              className="w-16 h-20 rounded-lg"
            />
            <div>
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asd asd")}
              </h1>
              <p className="text-gray-300 text-sm">Season 8</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
            <FaPlay className="text-white " />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4 gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/game-of-thrones-franchise-poster.jpg"
              alt=""
              className="w-16 h-20 rounded-lg"
            />
            <div>
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asd asd")}
              </h1>
              <p className="text-gray-300 text-sm">Season 8</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
            <FaPlay className="text-white " />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4 gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/game-of-thrones-franchise-poster.jpg"
              alt=""
              className="w-16 h-20 rounded-lg"
            />
            <div>
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asd asd")}
              </h1>
              <p className="text-gray-300 text-sm">Season 8</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
            <FaPlay className="text-white " />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4 gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/game-of-thrones-franchise-poster.jpg"
              alt=""
              className="w-16 h-20 rounded-lg"
            />
            <div>
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asd asd")}
              </h1>
              <p className="text-gray-300 text-sm">Season 8</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
            <FaPlay className="text-white " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Saved;

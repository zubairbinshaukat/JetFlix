import React from "react";
import { FaPlay } from "react-icons/fa";

const Continue = () => {
  const nameShort = (name) => {
    if (name.length > 30) {
      return name.substring(0, 30) + "...";
    }
    return name;
  };
  return (
    <div>
      <div className="w-full h-[50vh] backdrop-blur-lg bg-white/5 p-6 rounded-3xl overflow-y-scroll no-scrollbar">
        <h1 className="text-white font-bold text-xl">Continue Watching</h1>
        <div className="flex flex-col gap-3 mt-4">
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIqAFWz9_qSWxHX1j6cksFZ57zZtW9qS-zg&s"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 px-4 py-1 bg-black/10 rounded-bl-xl rounded-br-xl backdrop-blur-lg w-full flex gap-5 items-center justify-between ">
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asdjaskd ajsd asdja sd")}
              </h1>
              <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
                <FaPlay className="text-white " />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <div className="relative w-full h-[200px] rounded-xl  overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIqAFWz9_qSWxHX1j6cksFZ57zZtW9qS-zg&s"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 px-4 py-1 bg-black/10 rounded-bl-xl rounded-br-xl backdrop-blur-lg w-full flex gap-5 items-center justify-between ">
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asdjaskd ajsd asdja sd")}
              </h1>
              <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
                <FaPlay className="text-white " />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIqAFWz9_qSWxHX1j6cksFZ57zZtW9qS-zg&s"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 px-4 py-1 bg-black/10 rounded-bl-xl rounded-br-xl backdrop-blur-lg w-full flex gap-5 items-center justify-between ">
              <h1 className="text-white text-lg font-medium">
                {nameShort("Game Of Thrones asdjaskd ajsd asdja sd")}
              </h1>
              <button className="bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-lg p-3 rounded-full">
                <FaPlay className="text-white " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continue;

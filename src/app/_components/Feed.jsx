import React from "react";
import { RiBearSmileFill } from "react-icons/ri";
const Feed = () => {
  return (
    <div>
      <div className=" w-full h-auto flex gap-3 md:p-0 px-2 overflow-x-scroll no-scrollbar ">
        <button className="px-8 py-6 text-xl flex gap-2 items-center text-white rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl  duration-200 transition">
          <RiBearSmileFill className="text-2xl" />
          Animation
        </button>
        <button className="px-8 py-6 text-xl flex gap-2 items-center text-white rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg  duration-200 transition">
          <RiBearSmileFill className="text-2xl" />
          Animation
        </button>
        <button className="px-8 py-6 text-xl flex gap-2 items-center text-white rounded-3xl bg-white/10 backdrop-blur-sm border-transparent hover:bg-white/20 hover:shadow-lg duration-200 transition">
          <RiBearSmileFill className="text-2xl" />
          Animation
        </button>
        <button className="px-8 py-6 text-xl flex gap-2 items-center text-white rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg duration-200 transition">
          <RiBearSmileFill className="text-2xl" />
          Animation
        </button>
        <button className="px-8 py-6 text-xl flex gap-2 items-center text-white rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg duration-200 transition">
          <RiBearSmileFill className="text-2xl" />
          Animation
        </button>
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="group relative">
            <img
              alt={`Movie ${index + 1}`}
              className="w-full h-[300px] rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              height="300"
              src={`https://via.placeholder.com/300x300`}
              width="200"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Feed;

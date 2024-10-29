import React from "react";
import { FaPlay } from "react-icons/fa";

const LoadedMovies = () => {
  return (
    <div className="flex flex-col w-full px-2 md:px-0 gap-3">
      <h1 className="text-3xl text-white font-medium">Trending in Animation</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 w-full ">
        <div className="w-full group text-white flex flex-col gap-2 cursor-pointer">
          <div className="relative  w-full h-auto rounded-2xl overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6qjcjdI8bu9wL3vH3aYptU8DJlNioobIqQ&s"
              alt="Spider-Man"
              className="w-full h-full object-cover group-hover:scale-110 duration-100 transition-all"
            />
            <div className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 hidden group-hover:flex duration-200 transition-all justify-center items-center">
              <div className="text-xl p-3 rounded-full bg-black/30 backdrop-blur-3xl ">
                <FaPlay />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-medium mb-1">Spider Man</h1>
            <div className="flex gap-2 items-center">
              <h3>⭐️ 7.1</h3>
              <div className="h-4 w-[1px] bg-gray-200"></div>
              <h3>2023</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadedMovies;

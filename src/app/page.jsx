"use client";
import Carousel from "./_components/Carousel";
import Continue from "./_components/Continue";
import Saved from "./_components/Saved";
export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden md:px-4 py-4 md:grid grid-cols-7 gap-5">
      <div className="col-span-2 hidden h-screen md:flex flex-col gap-5">
        <Continue />
        <Saved />
      </div>
      <div className="col-span-5">
        <Carousel />
      </div>
    </div>
  );
}

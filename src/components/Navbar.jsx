"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";

import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, [darkMode]);

  const handleCheckboxChange = () => {
    setDarkMode(!darkMode); // Toggle dark mode when checkbox is clicked
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  if (!loading) {
    return (
      <div className="w-full px-4 flex justify-between bg-transparent items-center">
        <div className="w-auto h-auto">
          <Link href="/">
            <Image
              src="/nazaraB.png"
              alt="Nazara"
              width={1000}
              height={1000}
              className="dark:hidden md:w-56 w-40  h-auto"
            />
            <Image
              src="/nazaraW.png"
              alt="Nazara"
              width={1000}
              height={1000}
              className="hidden dark:block md:w-56 w-40  h-auto"
            />
          </Link>
        </div>
        <div className="relative text-white bg-[#010f1d] md:flex hidden p-2 rounded-3xl gap-4">
          <div className="flex gap-7 items-center px-2">
            <Link
              href="/"
              className={`${isActive("/") ? "text-[#8FA2AD] font-bold" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/movies"
              className={`${
                isActive("/movies") ? "text-[#8FA2AD] font-bold" : ""
              }`}
            >
              Movies
            </Link>
            <Link
              href="/series"
              className={`${
                isActive("/series") ? "text-[#8FA2AD] font-bold" : ""
              }`}
            >
              Tv Series
            </Link>
            <Link
              href="/about"
              className={`${
                isActive("/about") ? "text-[#8FA2AD] font-bold" : ""
              }`}
            >
              About
            </Link>
          </div>

          <input
            type="text"
            className={` absolute transition-all duration-300 pl-3 placeholder-white ease-in-out backdrop-blur-lg bg-white/30 outline-none rounded-3xl top-0 left-0 h-full ${
              isExpanded ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
            placeholder="Search Here.."
          />
          <button
            className="z-10 bg-[#3d5c80] rounded-full p-1 items-center flex justify-center"
            onClick={handleButtonClick}
          >
            <FiSearch className="text-2xl" />
          </button>
        </div>
        <div>
          <div className="container">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={darkMode}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox" className="label"></label>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;

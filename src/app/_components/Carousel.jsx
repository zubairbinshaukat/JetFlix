"use client";
import React, { useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft, FaPlay } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import gsap from "gsap";
const Carousel = () => {
  const carouselRef = useRef(null);
  const textRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;
  const minLength = (name) => {
    if (name.length > 200) {
      return name.substring(0, 200) + "...";
    }
    return name;
  };

  useEffect(() => {
    gsap.to(
      textRef.current,
      {
        opacity: 1,
        duration: 10,
        ease: "power2.out",
      } // End at its original position
    );
    const carouselDom = carouselRef.current;
    const nextDom = carouselDom.querySelector("#next");
    const prevDom = carouselDom.querySelector("#prev");
    const sliderDom = carouselDom.querySelector(".list");
    const thumbnailBorderDom = carouselDom.querySelector(".thumbnail");
    const timeDom = carouselDom.querySelector(".time");

    // Function to show the slider based on type (next/prev)
    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.querySelectorAll(".item");
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

      if (type === "next") {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }

      // Reset animation classes
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      // Restart auto-next timer
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    // Event Listeners for navigation buttons
    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

    // Auto slide to the next item every `timeAutoNext` interval
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    // Cleanup on component unmount
    return () => {
      nextDom.onclick = null;
      prevDom.onclick = null;
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);
  const images = [
    "https://images.unsplash.com/photo-1719937206498-b31844530a96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1729541023006-43a8762a03cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729694811891-40eebb6c901c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel officiis molestias autem voluptates tenetur mollitia deleniti, fugit et nulla? Reiciendis corporis quam, est delectus debitis harum minima tempora quidem obcaecati autem odit. Consequuntur corrupti eligendi sint labore quaerat modi.";
  const data = [
    {
      title: "Spider-Man",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel officiis molestias autem voluptates tenetur mollitia deleniti, fugit et nulla? Reiciendis corporis quam, est delectus debitis harum minima tempora quidem obcaecati autem odit. Consequuntur corrupti eligendi sint labore quaerat modi.",
    },
    {
      title: "Aristotle",
      desc: "is harum minima tempora quidem obcaecati autem odit. Consequuntur corrupti eligendi sint labore quaerat modiLorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel officiis molestias autem voluptates tenetur mollitia deleniti, fugit et nulla? Reiciendis corporis quam, est delectus debit.",
    },
    {
      title: "Alita Battle Angel",
      desc: "tenetur mollitia deleniti, fugit et nulla? Reiciendis corporis quam, est delectus debitis harum minima tempora quidem obcaecati autem odit. Consequuntur corrupti eligendi sint labore quaerat modiLorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel officiis molestias autem voluptates .",
    },
    {
      title: "Batman Rises",
      desc: "tenetur mollitia deleniti, fugit et nulla? Reiciendis corporis quam, est delectus debitis harum minima tempora quidem obcaecati autem odit. Consequuntur corrupti eligendi sint labore quaerat modiLorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel officiis molestias autem voluptates .",
    },
  ];
  return (
    <div className="relative w-full h-[400px] md:h-[50vh] shadow-xl rounded-3xl overflow-hidden">
      <div className="carousel h-full w-full " ref={carouselRef}>
        <div className="list">
          {[1, 2, 3, 4].map(( num) => (
            <div className="item" key={num}>
              <img
                src={
                  images[num]
                    ? images[num]
                    : "https://via.placeholder.com/1080x1560"
                }
                alt={`Slide ${num}`}
              />
              <div className="absolute top-6 left-6 bg-white/5 shadow-md backdrop-blur-xl rounded-3xl py-1 px-3 text-white font-medium">
                🔥 Now Trending
              </div>
              <div className="absolute bottom-6 left-6 md:w-2/4 w-[90%] text-white">
                <div className="flex gap-3 mb-5">
                  <div className="bg-white/5 shadow-md backdrop-blur-xl rounded-3xl py-1 px-3">
                    Animation
                  </div>
                  <div className="bg-white/5 shadow-md backdrop-blur-lg rounded-3xl py-1 px-3">
                    Adventure
                  </div>
                </div>
                <div className="text-3xl transform font-medium transition duration-300">
                  <h1 className="fade-in">Spider Man</h1>
                </div>
                <div className="">
                  <p className="text-gray-300 fade-in">{minLength(desc)}</p>
                </div>
                <div className="flex gap-3">
                  <button className="text-black bg-white flex items-center gap-3 rounded-3xl px-6 py-2 mt-3 hover:bg-transparent border hover:text-white transition-all duration-300">
                    <FaPlay className="text-sm" />
                    Watch
                  </button>
                  <button className="text-white border flex items-center gap-3 rounded-3xl px-3 py-2 mt-3 hover:bg-white hover:text-black">
                    <IoIosMore className="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* List thumbnail */}
        <div className="thumbnail absolute bottom-[50px] left-[60%] z-[100] gap-5 hidden md:flex">
          {[1, 2, 3, 4].map((num) => (
            <div className="item" key={num}>
              <img
                src={
                  images[num + 1]
                    ? images[num + 1]
                    : "https://via.placeholder.com/300x300"
                }
                alt={`Thumbnail ${num}`}
              />
            </div>
          ))}
        </div>

        {/* Next and Previous buttons */}
        <div className="absolute bottom-[2%] right-[5%] z-[100] max-w-[30%] hidden md:flex justify-center items-center gap-2">
          <button
            id="prev"
            className="bg-white/20 text-white rounded-full p-2 backdrop-blur-lg hover:bg-white/40"
          >
            <FaChevronLeft />
          </button>
          <button
            id="next"
            className="bg-white/20 text-white rounded-full p-2 backdrop-blur-lg hover:bg-white/40"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Timer (if functional needs JavaScript/React timer) */}
        <div className="time"></div>
      </div>
    </div>
  );
};

export default Carousel;

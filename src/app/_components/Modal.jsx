"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
export default function Modal() {
  const modalRef = useRef(null); // Reference to the modal
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(imgRef.current, {
      y: "0%",
      opacity: 1,
      duration: 1.5,
      ease: "power3.inOut",
    });
    tl.to(btnRef.current, {
      y: "0%",
      opacity: 1,
      duration: 1.5,
      ease: "power3.inOut",
    });
    const timer = setTimeout(() => {
        closeModal();
      }, 3000);
      return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    gsap.to(modalRef.current, {
      y: "-100%",
      duration: 1.5,
      ease: "power3.inOut",
    });
  };
  return (
    <div className=" h-full">
      <div
        ref={modalRef}
        className={`fixed inset-0 flex items-center  justify-center z-[1000000] cool-bg`}
      >
        <div className="text-center mb-3 ">
          <div className="md:w-[800px] md:h-[250px] h-[80px] overflow-hidden">
            <Image
              ref={imgRef}
              src="/nazaraB.png"
              alt="Nazara"
              width={1000}
              height={1000}
              className="dark:hidden md:w-[800px] w-72  h-auto translate-y-[100%] "
            />
          </div>
          <div className="w-auto h-[50px] overflow-hidden">
            <p
              ref={btnRef}
              onClick={closeModal}
              className="md:px-8 px-4 py-2 text-black md:text-2xl text-lg translate-y-[100%]"
            >
               For <span className="md:text-3xl text-xl text-red-50 font-bold"> Movies </span> & <span className="md:text-3xl text-xl text-red-50 font-bold">Webseries.</span> 
            </p>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

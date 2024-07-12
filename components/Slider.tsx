"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1, 
    title: "Street Sale Collections",
    description: "Street Urban Collection!",
    img: "/banner4.png",
  },
  {
    id: 2,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/banner3.5.png",
  },
  {
    id: 3,
    title: "Hot Sale Collections",
    description: "Hot! Up to 80% off!",
    img: "/banner.png",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-screen xl:h-full relative">
              {
                slide.img && (
                  <Image
                    src={slide.img}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover w-full"
                  />
                )
              }
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

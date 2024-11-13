"use client"; // Ensure this is a client-side component
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Collection {
  _id: string;
  title: string;
  image: string;
}

interface SliderProps {
  collections: Collection[];
}

const Slider: React.FC<SliderProps> = ({ collections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + collections.length) % collections.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {collections.map((collection) => (
          <div key={collection._id} className="relative w-full flex-shrink-0">
            <div className="relative w-full">
              <Image
                src={collection.image}
                alt={collection.title}
                width={1920}
                height={600}
                className="object-cover w-full h-[400px] md:h-[500px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <h2 className="absolute bottom-5 left-5 text-white text-2xl md:text-3xl lg:text-4xl font-bold z-10">
                {collection.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
      >
        ◄
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
      >
        ►
      </button>
    </div>
  );
};

export default Slider;

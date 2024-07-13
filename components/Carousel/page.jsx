"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://i.ibb.co/7ryBb9J/423619236-1470537636873579-3157738170708554412-n.png",
  "https://i.ibb.co/DRBCfJP/430405006-24987836567498039-5224183084268925764-n.jpg",
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Carousel container */}
      <div className="relative h-64 overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              //   width={500}
              //   height={600}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

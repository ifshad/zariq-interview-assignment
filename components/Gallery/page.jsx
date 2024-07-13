"use client";
import { gallery } from "@/constants/navigationData";
import Image from "next/image";
import React, { useState } from "react";

export default function Gallery() {
  const [isHovered, setIsHovered] = useState(null);
  console.log(isHovered);
  return (
    <div id="gallery" className="container md:p-12">
      <h1 className="section-title">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {gallery.map((pic) => (
          <div
            key={pic.id}
            onMouseEnter={() => setIsHovered(pic.id)}
            onMouseLeave={() => setIsHovered(null)}
            className="shadow-xl relative"
          >
            <Image
              src={pic.imageUrl}
              alt={pic.eventName}
              width={100}
              height={100}
              className="w-full"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                isHovered === pic.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white text-center font-bold text-lg">
                {pic.eventName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

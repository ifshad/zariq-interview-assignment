import { visionMissionValuesArray } from "@/constants/navigationData";
import React from "react";

export default function FlipCard() {
  return (
    <div className="flex items-center justify-center gap-7">
      {/* Flip Card */}
      {visionMissionValuesArray.map((item) => (
        <div
          key={item.id}
          className="bg-transparent rounded-xl w-80 h-96 cursor-pointer group perspective"
        >
          {/* Child */}
          <div className="relative w-full h-full group-hover:rotate-y-180 duration-1000 preserve-3d">
            {/* Front Side */}
            <div className="absolute w-full shadow-xl rounded-lg h-full p-10 backface-hidden bg-slate-100 flex flex-col justify-center items-center gap-8">
              <span className="flex justify-center text-7xl text-secondary-color">
                {item.icon}
              </span>
              <h1 className="card-title">{item.title}</h1>
            </div>
            {/* Back Side */}
            <div className="absolute w-full shadow-xl rounded-lg h-full p-10 backface-hidden rotate-y-180 bg-secondary-color flex">
              <div className="bg-accent-color m-4 p-2 text-primary-color text-center rounded-xl">
                <h1 className="text-3xl font-semibold">{item.title}</h1>
                <p>{item.short_description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

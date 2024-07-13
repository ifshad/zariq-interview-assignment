import { upcomingEvents } from "@/constants/navigationData";
import Image from "next/image";
import React from "react";

export default function EventsSection() {
  return (
    <div id="upcoming-events" className="md:py-12">
      <div className="h-60 bg-parallax">
        <h1 className="container text-6xl font-bold text-primary-color">
          Events
        </h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="w-80 grid grid-rows-6 shadow-xl rounded cursor-pointer hover:scale-105 transition-all duration-500"
          >
            <div className="row-span-4 w-full h-full relative">
              <Image
                src={event.imageUrl}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="row-span-2 grid grid-cols-7 p-3">
              <div className="col-span-2 text-secondary-color text-3xl font-semibold p-1 border-b-2 border-secondary-color">
                {event.date}
              </div>
              <div className="col-span-5 p-1">
                <p className="font-semibold text-lg">{event.title}</p>
                <p className="text-secondary-color">{event.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

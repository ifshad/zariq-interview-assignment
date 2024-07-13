"use client";
import { whyChooseDetails } from "@/constants/navigationData";
import React, { useState } from "react";

const buttons = [
  {
    id: 1,
    title: "GIS",
  },
  {
    id: 2,
    title: "British Education",
  },
  {
    id: 3,
    title: "Islamic Schooling",
  },
  {
    id: 4,
    title: "Hafez & Hafeza",
  },
];

export default function WhyChooseUs() {
  const [selectedOption, setSelectedOption] = useState(1);
  //   console.log(selectedOption);
  return (
    <div id="why-choose-us" className="container md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">
        {/* Images */}
        <div className="md:col-span-1 bg-slate-50">
          {whyChooseDetails.map((item) => {
            if (item.id === selectedOption) {
              return <p key={item.id}>{item.imageUrl}</p>;
            }
          })}
        </div>
        {/* Description */}
        <div className="md:col-span-2">
          {/* Buttons */}
          <div className="bg-slate-300">
            {buttons.map((button) => (
              <button
                onClick={() => setSelectedOption(button.id)}
                className={`p-4 w-1/4 text-slate-700 hover:bg-slate-50 ${
                  button.id === selectedOption &&
                  "bg-slate-50 text-slate-900 font-semibold"
                }`}
                key={button.id}
              >
                {button.title}
              </button>
            ))}
          </div>
          {/* Descriptions */}
          <div className="">
            {whyChooseDetails.map((item) => {
              if (item.id === selectedOption) {
                return (
                  <div key={item.id} className={`p-4 bg-slate-50`}>
                    <h1 className="card-title mt-5 mb-3">{item.title}</h1>
                    <p className="mb-5">{item.description}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="container md:p-12">
      <div className="bg-slate-300">
        {buttons.map((button) => (
          <button
            onClick={() => setSelectedOption(button.id)}
            className={`p-4 hover:bg-slate-50 ${
              button.id === selectedOption && "bg-slate-50"
            }`}
            key={button.id}
          >
            {button.title}
          </button>
        ))}
      </div>
      <div>
        {whyChooseDetails.map((item) => {
          if (item.id === selectedOption) {
            return (
              <div key={item.id} className={`p-4 bg-slate-50`}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

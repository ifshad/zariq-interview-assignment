import { schoolInfo } from "@/constants/navigationData";
import React from "react";
import BoldBorder from "../BoldBorder/page";

export default function HistorySection() {
  return (
    <div className="container bg-fixed bg-parallax bg-cover bg-opacity-50 h-[500px] relative">
      {/* Dark Overlay */}
      <div className="absolute bg-black opacity-70 inset-0"></div>
      {/* Title */}
      <div className="relative w-4/5 mx-auto md:p-10 text-primary-color">
        <p className="md:text-xl mb-5 text-orange-300">ABOUT US</p>
        <h1 className="md:text-7xl font-bold mb-5">History of our school</h1>
        <BoldBorder />
        <p className="md:text-xl mb-5">
          The Averroes International School is recognized by the Bangladesh
          Ministry of Education and authorized by British Council and Edexcel as
          an English –medium educational institution for both Primary and
          Secondary Sections. The school established in 2015 is situated at
          Lalmatia, Mohammadpur in Dhaka. The School, surrounded by peaceful
          environment, which gives pleasures to children, offers education from
          Play to A Level. Read more
        </p>
        {/* Icons */}
        <div className="flex flex-col md:flex-row justify-between">
          {schoolInfo.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center">
              <span className="text-5xl">{item.icon}</span>
              <span className="text-4xl font-bold text-orange-300">{item.count}</span>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

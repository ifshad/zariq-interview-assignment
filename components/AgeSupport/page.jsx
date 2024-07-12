import { ageSpecificSupport } from "@/constants/navigationData";
import React from "react";
import BoldBorder from "../BoldBorder/page";

export default function AgeSupport() {
  return (
    <div className="container md:p-12 text-center">
      {/* Title */}
      <div className="w-3/5 mx-auto">
        <p className="section-category">ACADEMICS</p>
        <h1 className="section-title">
          Age-specific support for every stage
        </h1>
        <BoldBorder />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ageSpecificSupport.map((item) => (
          <div key={item.id} className="grid md:grid-rows-5 card">
            <div className="md:row-span-3"></div>
            <div className="md:row-span-2">
              <h1 className="card-title">{item.program}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

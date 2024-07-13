import React from "react";
import FlipCard from "../FlipCard/page";

export default function VisionMission() {
  return (
    <div id="vision-mission-values" className="md:py-12">
      <div className="bg-secondary-color mt-5">
        <h1 className="section-title container text-center text-primary-color">
          Vision, Mission & Values
        </h1>
      </div>
      <div className="container py-5">
        <FlipCard />
      </div>
    </div>
  );
}

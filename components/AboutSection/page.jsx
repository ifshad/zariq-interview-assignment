import React from "react";
import BoldBorder from "../BoldBorder/page";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="container md:p-12">
      {/* Title */}
      <div className="w-3/5 mx-auto">
        <p className="section-category">ABOUT US</p>
        <h1 className="section-title">
          We are here to help parents raise happy and healthy children
        </h1>
        <BoldBorder />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-8">
        {/* Images */}
        <div className="md:col-span-3">
          <Image
            src="https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png"
            alt="News image"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        {/* Text */}
        <div className="md:col-span-5 md:p-10">
          <p className="section-category">
            Reverie School is an English medium school currently catering for
            students from Playgroup to Grade 7. Following the Edexcel
            curriculum, Reverie School intends to deliver excellent educational
            programs in the following Key Learning Areas: English, Mathematics,
            Science, Human Society, Technology, Creative Arts, Personal
            Development, Health and Physical Education as well as lessons in
            Quran, Islamic Studies and Arabic Language classes. Here at Reverie
            School, we aim to help our precious children to think and act in
            ways that are truly inspiring.
          </p>
        </div>
      </div>
    </div>
  );
}

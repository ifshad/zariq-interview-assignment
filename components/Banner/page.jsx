import React from "react";
import { FaPhone } from "react-icons/fa6";
import bench from "@/public/Images/school_image_01.jpg";
import student from "@/public/Images/school_image_02.jpg";
import BoldBorder from "../BoldBorder/page";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-8 md:p-12">
      {/* Text */}
      <div className="md:col-span-5 md:p-10">
        <p className="section-category">Learn . Play. Explore</p>
        <h1 className="section-title">
          A safe and joyful place for your lovely children
        </h1>
        <BoldBorder />
        <p className="section-category">
          Assalamu Alaikum! Welcome to Reverie School, where academic excellence
          meets moral values. Located at Bashundhara Residential Area in Dhaka,
          our English medium institution offers a holistic education, nurturing
          students to thrive academically and spiritually. Join us for a journey
          of learning and enlightenment.
        </p>
        <div className="divide-y-2">
          <div className="flex gap-5 items-center mb-4">
            <button className="btn">Enroll Your Kid</button>
            <span>4.8 rating on Google</span>
          </div>
          <span className="flex items-center gap-3 text-xl mt-4">
            <FaPhone /> (+880)1799652249
          </span>
        </div>
      </div>
      {/* Images */}
      <div className="md:col-span-3 relative md:py-20">
        <div className="relative w-full h-[400px]">
          <Image
            src="https://i.ibb.co/QczVPBG/A1.jpg"
            alt="School image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-[-130px] right-[-30px] w-2/3 h-2/3">
            <Image
              src="https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png"
              alt="School image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

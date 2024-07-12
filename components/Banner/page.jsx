import React from "react";
import { FaPhone } from "react-icons/fa6";
import bench from "@/public/Images/school_image_01.jpg";
import student from "@/public/Images/school_image_02.jpg";
import BoldBorder from "../BoldBorder/page";

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
      <div className="md:col-span-3">
        {/* <Image src="../" alt="school children img" />
        <Image src={bench} alt="school children img" /> */}
      </div>
    </div>
  );
}

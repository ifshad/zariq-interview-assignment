"use client";
import React from "react";
import Carousel from "../Carousel/page";
import BoldBorder from "../BoldBorder/page";
import imageOne from "../../public/Images/school_image_01.png";
import imageTwo from "../../public/Images/school_image_02.png";
import Image from "next/image";

const imageItems = [imageOne, imageTwo, imageOne, imageTwo, imageOne, imageTwo];

export default function CampusTour() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const parentName = form.get("parentName");
    const studentName = form.get("studentName");
    const birthDate = form.get("birthDate");
    const grade = form.get("grade");
    const phoneNumber = form.get("phoneNumber");
    const email = form.get("email");
    const message = form.get("message");

    const admissionInfo = {
      parentName,
      studentName,
      birthDate,
      grade,
      phoneNumber,
      email,
      message,
    };

    console.log(admissionInfo);
    e.target.reset();
  };
  return (
    <div id="campus" className="md:py-12">
      {/* Title */}
      <div className="bg-secondary-color my-5">
        <h1 className="section-title container text-center text-primary-color">
          VISIT GLENRICH CAMPUS
        </h1>
      </div>
      {/* Contents */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Carousel */}
        <div>
          <Carousel />
        </div>
        {/* Form */}
        <div className="p-5 border-2 border-accent-color rounded-md shadow-xl">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="w-full">
                <p className="mb-2">
                  First Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="parentName"
                  id="parentName"
                  className="w-full border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                  required
                />
              </div>
              <div className="w-full">
                <p className="mb-2">
                  Last Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="studentName"
                  id="studentName"
                  className="w-full border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <p className="mb-2">
                Student&apos;s Date of Visit{" "}
                <span className="text-red-500">*</span>
              </p>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                className="w-full border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-2">
                Phone Number <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="w-full border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                min="11"
                max="14"
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-2">
                Email Address <span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-2">How can we help?</p>
              <input
                type="text"
                name="message"
                id="message"
                className="w-full border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
              />
            </div>
            <div className="my-4 flex gap-4 items-center p-4 border rounded-md">
              <input type="checkbox" name="isHuman" id="isHuman" />
              <p className="mb-2">I am human</p>
            </div>
            <input type="submit" value="Submit" className="btn w-full my-2" />
          </form>
        </div>
      </div>
      {/* Galary */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="card-title">GLENRICH CAMPUS OVERVIEW</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto">
        {imageItems.map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`index${index + 1}`} width={200} />
            <p className="text-center">Satarkul Branch</p>
          </div>
        ))}
      </div>
    </div>
  );
}

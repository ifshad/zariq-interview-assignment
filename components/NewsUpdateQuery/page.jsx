"use client";
import {
  latestUpdates,
  newsMedia,
  schoolGrades,
} from "@/constants/navigationData";
import React, { useState } from "react";
import BoldBorder from "../BoldBorder/page";
import Carousel from "../Carousel/page";
import Image from "next/image";

export default function NewsUpdateQuery() {
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
    <div className="container md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Latest Update */}
      <div>
        <Carousel />
        <div>
          <h1 className="card-title mb-5">Latest Updates</h1>
          <BoldBorder />
          <div className="relative h-[200px] overflow-hidden">
            <div className="absolute w-full animate-marquee hover:pause">
              {latestUpdates.map((update) => (
                <div key={update.id} className="mb-6">
                  <p className="">
                    <u>{update.update}</u>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* News */}
      <div>
        <h1 className="card-title mb-5">News & Media</h1>
        <BoldBorder />
        <div>
          {newsMedia.map((news) => (
            <div key={news.id} className="grid grid-cols-5 p-5 cursor-pointer">
              <div className="col-span-1 relative w-full h-full">
                <Image src={news.imageUrl} alt={news.title} layout="fill" objectFit="cover" />
              </div>
              <div className="col-span-4 px-1">
                <h1 className="text-secondary-color">{news.title}</h1>
                {/* <p>{news.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Admission query */}
      <div className="">
        <h1 className="card-title mb-5">Admission Query</h1>
        <BoldBorder />
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full">
            <p className="mb-2">
              Parents/Guardian Name <span className="text-red-500">*</span>
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
              Name of Student <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="studentName"
              id="studentName"
              className="w-full border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
              required
            />
          </div>
          <div className="w-full">
            <p className="mb-2">
              Student&apos;s Date of Birth{" "}
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
              Select Grade <span className="text-red-500">*</span>
            </p>
            <select name="grade" id="grade" className="w-full p-2 outline-none">
              <option value="">Please select grade</option>
              {schoolGrades.map((grade) => (
                <option key={grade.id} value={grade.grade} className="">
                  {grade.grade}
                </option>
              ))}
            </select>
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
          <input type="submit" value="Submit" className="btn w-full my-2" />
        </form>
      </div>
    </div>
  );
}

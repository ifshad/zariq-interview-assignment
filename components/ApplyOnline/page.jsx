"use client";
import React from "react";

export default function ApplyOnline() {
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

    // console.log(admissionInfo);
    e.target.reset();
  };
  return (
    <div id="apply-online" className="">
      <div className="h-60 bg-parallax">
        <h1 className="container text-6xl font-bold text-primary-color">
          Apply Online
        </h1>
      </div>
      <div className="container md:p-12">
        <div className="text-center">
          <h1 className="card-title">Online Admission Form</h1>
          <p className="text-red-500">
            *** Please fill up all the fields with care. Any incorrect
            information may cause unsuccessful submission.
          </p>
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
    </div>
  );
}

import { teacherList } from "@/constants/navigationData";
import React from "react";
import BoldBorder from "../BoldBorder/page";
import Image from "next/image";

export default function OurTeamSection() {
  const principal = teacherList.find(
    (teacher) => teacher.designation === "Principal"
  );
  const otherTeachers = teacherList.filter(
    (teacher) => teacher.designation !== "Principal"
  );
  // console.log(otherTeachers);

  return (
    <div id="our-team" className="container md:p-12">
      {/* Title */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="section-title">Our Team Teaching</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      {/* Principal */}
      <div className="bg-transparent rounded-xl w-80 mx-auto h-96 cursor-pointer group perspective my-4 text-center">
        {/* Child */}
        <div className="relative w-full h-full group-hover:rotate-y-180 duration-1000 preserve-3d">
          {/* Front Side */}
          <div className="absolute w-full shadow-xl rounded-lg h-full p-10 backface-hidden flex flex-col justify-center text-center border border-secondary-color text-secondary-color gap-8">
            <Image
              src={principal.imageUrl}
              alt={principal.name}
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
            <h1 className="card-title">{principal.name}</h1>
            <p>{principal.designation}</p>
          </div>
          {/* Back Side */}
          <div className="absolute w-full shadow-xl rounded-lg h-full p-10 backface-hidden rotate-y-180 border border-secondary-color text-secondary-color flex">
            <div className="m-4 p-2 text-center rounded-xl">
              <h1 className="text-3xl font-semibold">{principal.name}</h1>
              <p>{principal.designation}</p>
              <p className="font-semibold">{principal.department}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Other teacher */}
      <h1 className="card-title text-center">
        Secondary and Higher Secondary Section (Main Branch Lalmatia )
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
        {otherTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-transparent rounded-xl w-80 h-96 cursor-pointer group perspective"
          >
            {/* Child */}
            <div className="relative w-full h-full group-hover:rotate-y-180 duration-1000 preserve-3d">
              {/* Front Side */}
              <div className="absolute w-full shadow-xl rounded-lg h-full p-10 backface-hidden border border-secondary-color text-secondary-color flex flex-col justify-center teachers-center gap-8">
                <Image
                  src={teacher.imageUrl}
                  alt={teacher.name}
                  width={100}
                  height={100}
                  className="mx-auto rounded-full"
                />
                <h1 className="card-title">{teacher.name}</h1>
                <p>{teacher.designation}</p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full shadow-xl rounded-lg h-full p-10 backface-hidden rotate-y-180 border border-secondary-color text-secondary-color flex">
                <div className=" m-4 p-2 text-center rounded-xl">
                  <h1 className="text-3xl font-semibold">{teacher.name}</h1>
                  <p>{teacher.designation}</p>
                  <p className="font-semibold">{teacher.department}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

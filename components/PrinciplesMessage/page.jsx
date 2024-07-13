import React from "react";
import BoldBorder from "../BoldBorder/page";
import Image from "next/image";

export default function PrinciplesMessage() {
  return (
    <div id="principal-message" className="container md:p-12">
      {/* Title */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="section-title">Message from Head of School</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left Side */}
        <div className="md:col-span-2 grid grid-rows-5">
          <div className="row-span-4 pt-5">
            <Image
              src="https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png"
              alt="News image"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className="row-span-1 py-3">
            <h1 className="text-xl font-semibold">
              Mohammad Anisur Rahaman Shohagh
            </h1>
            <p className="opacity-80">Head of School</p>
            <p className="opacity-90">Averroes International Schoo</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:col-span-3 px-5">
          <h1 className="card-title">
            Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu
          </h1>
          <p>
            On behalf of the AIS family, I extend a very warm welcome to you. We
            started our journey in pursuit of excellence in April 2015 and it
            has been a wonderful experience so far; one that will be cherished
            by all associated with this institution. We passionately believe in
            everything that this institution stands for and its promise to be a
            trendsetter in the field of education. An education of the highest
            quality is the greatest gift that parents can give to their
            children. The next global generation will need exceptional academic
            and intellectual creativity to take on positions of leadership and
            address the many challenges that face our world. Given this, it is
            vitally important that the leading schools in the 21st Century
            provide a genuinely holistic international education to prepare
            learners for the responsibilities they will face in their lives. The
            curriculum at AIS is tailored to meet the needs of the hour and
            sensitive to learners of different types. A plethora of academic and
            co-curricular activities offers the opportunity to all students to
            discover and re-discover facets of their personalities. Cultural
            programmes and observance of international and national days bring
            out the students’ intellectual potentials and are a platform for
            showcasing remarkable talent. We are pledged to live up to the
            rising expectations of parents and setting a benchmark in the field
            of quality education. I conclude my message with an invitation to
            you to visit the AIS campus; where teaching and learning is simple
            and enjoyable, and most importantly, within the reach of students.
            “May Allah guide us to the straight path”. Aameen
          </p>
        </div>
      </div>
    </div>
  );
}

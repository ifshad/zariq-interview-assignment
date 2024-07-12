import React from "react";
import Table from "../Table/main";
import {
  earlyYearsTiming,
  middleYearsTiming,
  primaryYearsTiming,
} from "@/constants/navigationData";

export default function SchoolTiming() {
  const earlyYearsColumn = [
    { header: "Class", accesor: "class" },
    { header: "First Shift", accesor: "firstShift" },
    { header: "Second Shift", accesor: "secondShift" },
  ];
  const primaryYearsColumn = [
    { header: "Class", accesor: "class" },
    { header: "School Timing", accesor: "schoolTiming" },
    { header: "Salah Timing", accesor: "salahTiming" },
  ];
  const middleYearsColumn = [
    { header: "Class", accesor: "class" },
    { header: "School Timing", accesor: "schoolTiming" },
    { header: "Salah Timing", accesor: "salahTiming" },
  ];
  return (
    <div className="container md:p-12">
      {/* Title */}
      <div className="w-3/5 mx-auto text-center">
        <h1 className="section-title">School Timing</h1>
      </div>
      {/* Table */}
      <div className="p-10 rounded-md border border-secondary-color flex flex-col">
        <h1 className="card-title mt-6 mb-3">For Early Years (Playgroup, Nursery, Kindergarten)</h1>
        <Table columns={earlyYearsColumn} data={earlyYearsTiming} />
        <h1 className="card-title mt-6 mb-3">For Primary Years (Grades 1-4)</h1>
        <Table columns={primaryYearsColumn} data={primaryYearsTiming} />
        <h1 className="card-title mt-6 mb-3">For Middle Years (Grades 5-6)</h1>
        <Table columns={middleYearsColumn} data={middleYearsTiming} />
        <p className="opacity-80 my-4">
          *Reverie School holds the right to chnage the school timing as per
          requirement.
        </p>
      </div>
      <div className="flex justify-center my-5">
        <button className="btn">Enroll Your Kid</button>
      </div>
    </div>
  );
}

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
    <div className="container md:p-12 text-center">
      {/* Title */}
      <div className="w-3/5 mx-auto">
        <h1 className="section-title">School Timing</h1>
      </div>
      {/* Table */}
      <h1>Early Years Time</h1>
      <Table columns={earlyYearsColumn} data={earlyYearsTiming} />
      <h1>primary Years Time</h1>
      <Table columns={primaryYearsColumn} data={primaryYearsTiming} />
      <h1>Middle Years Time</h1>
      <Table columns={middleYearsColumn} data={middleYearsTiming} />
    </div>
  );
}

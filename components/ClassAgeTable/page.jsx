import { classInfo } from "@/constants/navigationData";
import React from "react";

const ClassAgeTable = () => {
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Class</th>
            <th className="py-2 px-4 border-b text-left">Age Range</th>
          </tr>
        </thead>
        <tbody>
          {classInfo.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-2 px-4 border-b">{item.class}</td>
              <td className="py-2 px-4 border-b">{item.ageRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassAgeTable;

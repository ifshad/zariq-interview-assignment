import React from "react";
import BoldBorder from "../BoldBorder/page";
import { elementarySection } from "@/constants/navigationData";

export default function CurriculumSection() {
  return (
    <div id="curriculum" className="container md:p-12">
      {/* Title */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="section-title">Curriculum (General)</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      {/* Team */}
      {/* Title */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="card-title">OUR CURRICULUM</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      <div>
        <h1 className="subsection-title">Our curriculum Department</h1>
        <ul>
          <li>Md. Anisur Rahman Shohagh, Head of Curriculum Department</li>
          <li>
            Professor Mokhter Ahmad, Adviser, Department of Quranic Arabic &
            Arabic Language
          </li>
          <li>
            Farhan Alim, Curriculum Analyst & Head, Department of Mathematics
          </li>
          <li>Mohammed Nurun Nobi, Head, Department of English</li>
          <li>Professor Dr Enamul Haque, Honorary Department Head, Science</li>
        </ul>
      </div>
      {/* Elementary */}
      {/* Title */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="card-title">ELEMENTARY SECTION</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      <div>
        {elementarySection.map((element) => (
          <div key={element.id}>
            <h1 className="subsection-title">{element.title}</h1>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

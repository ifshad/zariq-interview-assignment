import React from "react";
import BoldBorder from "../BoldBorder/page";
import ClassAgeTable from "../ClassAgeTable/page";
import { admissionSteps } from "@/constants/navigationData";

export default function BriefAdProcedure() {
  return (
    <div id="procedure" className="container md:p-12">
      {/* Title */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="section-title">A Brief Admission Procedure</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7">
        <div className="md:col-span-4">
          <p>
            Once the admission opening date has been decided, Parents can call,
            email for the admission information or may come to the School Campus
            & complete the prescribed query form regarding admission.
          </p>
          {admissionSteps.map((step) => (
            <div key={step.id} className="">
              <h1 className="subsection-title">Step {step.id}:</h1>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-3">
          <ClassAgeTable />
        </div>
      </div>
    </div>
  );
}

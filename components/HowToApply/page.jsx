import { howToApply } from "@/constants/navigationData";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { TbClick } from "react-icons/tb";

export default function HowToApply() {
  return (
    <div id="how-to-apply" className="container md:p-12">
      <h1 className="section-title">How to Apply</h1>
      <div className="flex justify-around divide-x-2 divide-secondary-color my-6">
        <div className="flex-1 pr-6">
          <h1 className="subsection-title">Download Form</h1>
          <p>Download form & submit at our office</p>
          <button className="btn flex items-center gap-3 mt-3">
            <FaDownload /> Download Form
          </button>
        </div>
        <div className="flex-1 pl-6">
          <h1 className="subsection-title">Online Method</h1>
          <p>Click &apos;Apply Now&apos; button to apply online</p>
          <button className="btn flex items-center gap-3 mt-3">
            <TbClick /> Apply Now
          </button>
        </div>
      </div>
      <p>Please download the form and go through the process below</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        {howToApply.map((step) => (
          <div key={step.id} className="shadow-xl p-6">
            <div className="grid grid-cols-5">
              <div className="col-span-1 text-5xl font-bold text-accent-color">
                {step.id}
              </div>
              <div className="col-span-4">
                <h2 className="text-xl font-bold">{step.title}</h2>
                <ul className="list-disc pl-6 mt-2">
                  {step.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

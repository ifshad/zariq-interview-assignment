"use client";
import { schoolGrades } from "@/constants/navigationData";
import React, { useState } from "react";

export default function ApplyOnline() {
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const admissionInfo = {
      // Applying For
      grade: form.get("grade"),
      // Student's Information
      studentName: form.get("studentName"),
      dateOfBirth: form.get("dateOfBirth"),
      gender: form.get("gender"),
      nationality: form.get("nationality"),
      religion: form.get("religion"),
      presentAddress: form.get("presentAddress"),
      permanentAddress: form.get("permanentAddress"),
      previousInstitution: form.get("previousInstitution"),
      studentPhoto: form.get("studentPhoto"),
      birthCertificate: form.get("birthCertificate"),
      // Mother's Information
      motherName: form.get("motherName"),
      motherContact: form.get("motherContact"),
      motherEmail: form.get("motherEmail"),
      motherOccupation: form.get("motherOccupation"),
      motherDesignation: form.get("motherDesignation"),
      motherEducation: form.get("motherEducation"),
      motherPhoto: form.get("motherPhoto"),
      motherOfficeAddress: form.get("motherOfficeAddress"),
      // Father's Information
      fatherName: form.get("fatherName"),
      fatherContact: form.get("fatherContact"),
      fatherEmail: form.get("fatherEmail"),
      fatherOccupation: form.get("fatherOccupation"),
      fatherDesignation: form.get("fatherDesignation"),
      fatherEducation: form.get("fatherEducation"),
      fatherPhoto: form.get("fatherPhoto"),
      fatherOfficeAddress: form.get("fatherOfficeAddress"),
      // Payment Option
      paymentOption: form.get("paymentOption"),
      // Agreement
      agreement: form.get("agreement") === "on", // Will be true if checked, undefined if not
    };

    console.log(admissionInfo);
    e.target.reset();
    setAgreementChecked(false);
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
        <div className="border-2 border-secondary-color rounded-md shadow-xl">
          <form onSubmit={handleSubmit} className="w-full">
            {/* Tagline */}
            <div className="w-full">
              <p className="w-full p-5 bg-secondary-color text-primary-color">
                Applying For
              </p>
            </div>
            {/* Grade */}
            <div className="w-full p-5">
              <p className="mb-2">
                Select Grade <span className="text-red-500">*</span>
              </p>
              <select
                name="grade"
                id="grade"
                className="w-full p-2 outline-none"
              >
                <option value="">Please select grade</option>
                {schoolGrades.map((grade) => (
                  <option key={grade.id} value={grade.grade} className="">
                    {grade.grade}
                  </option>
                ))}
              </select>
            </div>
            {/* Tagline */}
            <div className="w-full">
              <p className="w-full p-5 bg-secondary-color text-primary-color">
                Student&apos;s Informations
              </p>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Student&apos;s Full Name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="studentName"
                id="studentName"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </p>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Gender <span className="text-red-500">*</span>
              </p>
              <select
                name="gender"
                id="gender"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Nationality <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="nationality"
                id="nationality"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Religion <span className="text-red-500">*</span>
              </p>
              <select
                name="religion"
                id="religion"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              >
                <option value="">Select Religion</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Christian">Christian</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Present Address <span className="text-red-500">*</span>
              </p>
              <textarea
                name="presentAddress"
                id="presentAddress"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              ></textarea>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Permanent Address <span className="text-red-500">*</span>
              </p>
              <textarea
                name="permanentAddress"
                id="permanentAddress"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              ></textarea>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">Student Previous Institution (If Any)</p>
              <input
                type="text"
                name="previousInstitution"
                id="previousInstitution"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Student Photo <span className="text-red-500">*</span>
              </p>
              <input
                type="file"
                name="studentPhoto"
                id="studentPhoto"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Student&apos;s Birth Certificate{" "}
                <span className="text-red-500">*</span>
              </p>
              <input
                type="file"
                name="birthCertificate"
                id="birthCertificate"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>

            {/* Mother's Information */}
            <div className="w-full">
              <p className="w-full p-5 bg-secondary-color text-primary-color">
                Mother&apos;s Information
              </p>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Mother&apos;s Full Name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="fatherName"
                id="fatherName"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Contact No. <span className="text-red-500">*</span>
              </p>
              <input
                type="tel"
                name="fatherContact"
                id="fatherContact"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Email <span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                name="fatherEmail"
                id="fatherEmail"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Occupation <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="fatherOccupation"
                id="fatherOccupation"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">Designation</p>
              <input
                type="text"
                name="fatherDesignation"
                id="fatherDesignation"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Educational Qualification{" "}
                <span className="text-red-500">*</span>
              </p>
              <select
                name="fatherEducation"
                id="fatherEducation"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              >
                <option value="">—Please choose an option—</option>
                <option value="SSC">SSC</option>
                <option value="HSC">HSC</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
              </select>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Mother&apos;s Photo <span className="text-red-500">*</span>
              </p>
              <input
                type="file"
                name="fatherPhoto"
                id="fatherPhoto"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">Office Address (if any)</p>
              <textarea
                name="fatherOfficeAddress"
                id="fatherOfficeAddress"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
              ></textarea>
            </div>

            {/* Father's Information */}
            <div className="w-full">
              <p className="w-full p-5 bg-secondary-color text-primary-color">
                Father&apos;s Information
              </p>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Father&apos;s Full Name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="fatherName"
                id="fatherName"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Contact No. <span className="text-red-500">*</span>
              </p>
              <input
                type="tel"
                name="fatherContact"
                id="fatherContact"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Email <span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                name="fatherEmail"
                id="fatherEmail"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Occupation <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="fatherOccupation"
                id="fatherOccupation"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">Designation</p>
              <input
                type="text"
                name="fatherDesignation"
                id="fatherDesignation"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Educational Qualification{" "}
                <span className="text-red-500">*</span>
              </p>
              <select
                name="fatherEducation"
                id="fatherEducation"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              >
                <option value="">—Please choose an option—</option>
                <option value="SSC">SSC</option>
                <option value="HSC">HSC</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
              </select>
            </div>
            <div className="w-full m-5">
              <p className="mb-2">
                Father&apos;s Photo <span className="text-red-500">*</span>
              </p>
              <input
                type="file"
                name="fatherPhoto"
                id="fatherPhoto"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              />
            </div>
            <div className="w-full m-5">
              <p className="mb-2">Office Address (if any)</p>
              <textarea
                name="fatherOfficeAddress"
                id="fatherOfficeAddress"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
              ></textarea>
            </div>

            {/* Payment Option */}
            <div className="w-full m-5">
              <p className="mb-2">
                Select Payment Option <span className="text-red-500">*</span>
              </p>
              <select
                name="paymentOption"
                id="paymentOption"
                className="w-11/12 border border-secondary-color rounded outline-none p-2 focus:shadow-lg"
                required
              >
                <option value="">Select Payment Option</option>
                <option value="PayNow">Pay Now</option>
                <option value="PayLater">Pay Later</option>
              </select>
            </div>

            {/* Agreement Checkbox */}
            <div className="my-4 flex gap-4 items-center p-4 border rounded-md">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={agreementChecked}
                onChange={(e) => setAgreementChecked(e.target.checked)}
              />
              <p className="mb-2">
                I hereby agree to the Guidance International School Code of
                Conduct, Privacy Policy and Terms of Use.
              </p>
            </div>
            <input
              type="submit"
              value="Submit"
              className={`btn w-full my-2 ${
                !agreementChecked ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!agreementChecked}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

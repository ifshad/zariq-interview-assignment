import { drawerItemsList } from "@/constants/navigationData";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-accent-color text-primary-color">
      <div className="container grid grid-cols-1 md:grid-cols-10 space-x-3 p-10">
        {/* Logo */}
        <div className="md:col-span-2">Logo</div>
        {/* Abouts */}
        <div className="md:col-span-2">
          <div>
            <h1 className="text-2xl font-semibold">About School</h1>
            <p className="text-opacity-85 text-lg">
              <Link
                className="hover:opacity-100 transition-opacity duration-200"
                href="/"
              >
                Mission
              </Link>
            </p>
            <p className="text-opacity-85 text-lg">
              <Link
                className="hover:opacity-100 transition-opacity duration-200"
                href="/"
              >
                Vision
              </Link>
            </p>
            <p className="text-opacity-85 text-lg">
              <Link
                className="hover:opacity-100 transition-opacity duration-200"
                href="/"
              >
                Values
              </Link>
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Academics</h1>
            <p className="text-opacity-85 text-lg">
              <Link
                className="hover:opacity-100 transition-opacity duration-200"
                href="/"
              >
                Curriculam
              </Link>
            </p>
          </div>
        </div>
        {/* Campuses */}
        <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {drawerItemsList.map((item, index) => (
            <div key={index}>
              <h1 className="text-2xl font-semibold">{item.branch}</h1>
              <p className="text-opacity-85 text-lg">{item.address}</p>
              <div className="">
                <p className="font-bold">Contact Number:</p>
                <p className="text-opacity-85 text-lg">{item.contactNumber}</p>
              </div>
              <div className="">
                <p className="font-bold">Email:</p>
                <p className="text-opacity-85 text-lg">{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";

const navListItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About us",
    link: "/about-us",
    subMenu: [
      {
        id: 21,
        title: "Vision, Mission and Values",
        link: "/about-us/vision-mission-values",
      },
      {
        id: 22,
        title: "Why choose us",
        link: "/about-us/why-choose-us",
      },
      {
        id: 23,
        title: "Principal Message",
        link: "/about-us/principal-message",
      },
      {
        id: 24,
        title: "Our Team",
        link: "/about-us/our-team",
      },
      {
        id: 25,
        title: "Curriculum",
        link: "/about-us/curriculum",
      },
      {
        id: 26,
        title: "History",
        link: "/about-us/history",
      },
      {
        id: 27,
        title: "Campus",
        link: "/about-us/campus",
      },
      {
        id: 28,
        title: "Upcoming Events",
        link: "/about-us/upcoming-events",
      },
      {
        id: 29,
        title: "Gallery",
        link: "/about-us/gallery",
      },
    ],
  },
  {
    id: 3,
    title: "Admission",
    link: "/admission",
    subMenu: [
      {
        id: 31,
        title: "A brief admission Procedure",
        link: "/admission/procedure",
      },
      {
        id: 32,
        title: "Scholarship",
        link: "/admission/scholarship",
      },
      {
        id: 33,
        title: "School fees",
        link: "/admission/school-fees",
      },
      {
        id: 34,
        title: "Withdrawal Policy",
        link: "/admission/withdrawal-policy",
      },
      {
        id: 35,
        title: "FAQ on Admissions",
        link: "/admission/faq",
      },
      {
        id: 36,
        title: "How to Apply",
        link: "/admission/how-to-apply",
      },
      {
        id: 37,
        title: "Apply Online",
        link: "/admission/apply-online",
      },
      {
        id: 38,
        title: "Online Payment",
        link: "/admission/online-payment",
      },
    ],
  },
  {
    id: 4,
    title: "Contact us",
    link: "/contact-us",
  },
  {
    id: 5,
    title: "Achievements",
    link: "/achievements",
  },
  {
    id: 6,
    title: "Key Information",
    link: "/key-information",
  },
  {
    id: 7,
    title: "Policies",
    link: "/policies",
    refUrl: "DPS STS School",
  },
  {
    id: 8,
    title: "Facilities",
    link: "/facilities",
  },
];

const drawerItemsList = [
  {
    branch: "Satarkul Branch",
    contactNumber: "+8809677444777",
    email: "info@glenrich.edu.bd",
    address:
      "Plot No: E-2 & E-3, Sunvalley Sharoni, Block: A, Sunvalley Abashan Swadesh Properties Ltd., Satarkul, Badda, Dhaka-1212",
    visitCampus: "Visit Satarkul Campus",
  },
  {
    branch: "Uttara Branch (Junior Campus)",
    contactNumber: "(+88) 0248961087",
    email: "info@uttara.glenrich.edu.bd",
    address: "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230",
    visitCampus: "Visit Uttara Campus",
  },
  {
    branch: "Uttara Branch (Senior Campus)",
    contactNumber: "(+88) 09614087141",
    email: "info@uttara.glenrich.edu.bd",
    address: "Plot ED-01, Road 1, Sector 15, Uttara Model Town, Dhaka-1230",
    visitCampus: "Visit Uttara Campus",
  },
];

export default function Header() {
  const [subMenu, setSubMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Section */}
      <div className="flex justify-between p-5">
        <div>School</div>
        <div>
          <ul className="flex space-x-5">
            <li className="btn">
              <Link href="/">Request For A Tour</Link>
            </li>
            <li className="btn">
              <Link href="/">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-secondary-color text-primary-color flex space-x-5 justify-center">
        {/* Menu List */}
        <ul className="flex space-x-5 justify-center">
          {navListItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer h-full p-4 relative hover:bg-accent-color text-opacity-90 hover:text-opacity-100 transition-all duration-300"
              onMouseEnter={() => setSubMenu(item.id)}
              onMouseLeave={() => setSubMenu(null)}
            >
              <Link href={item.link}>
                {item.title}
                {subMenu === item.id && item.subMenu && (
                  <ul className="absolute bg-secondary-color left-0 top-[55px] w-64">
                    {item.subMenu?.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="py-2 px-4 hover:bg-accent-color text-opacity-90 hover:text-opacity-100 transition-all duration-300"
                      >
                        <Link href={subItem.link}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {/* App Drawer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-accent-color text-opacity-90 hover:text-opacity-100 transition-all duration-300 px-4"
        >
          <TiThMenuOutline />
        </button>
      </div>
      {/* BG Overlay */}
      {isOpen && (
        <div
          className="fixed bg-black inset-0 bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed w-96 h-screen bg-primary-color text-accent-color ${
          isOpen ? "translate-x-0" : "-translate-x-96"
        } transition-all duration-500 overflow-y-scroll top-0 left-0`}
      >
        <div
          className="flex justify-between p-3"
        >
          <div>logo</div>
          <button onClick={() => setIsOpen(false)} className="text-4xl">
            <IoCloseCircleOutline />
          </button>
        </div>
        {drawerItemsList.map((item, index) => (
          <div key={index} className="p-7">
            <h1 className="text-2xl font-semibold">{item.branch}</h1>
            <p>{item.email}</p>
            <p>{item.contactNumber}</p>
            <p>{item.address}</p>
            <button className="btn">{item.visitCampus}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

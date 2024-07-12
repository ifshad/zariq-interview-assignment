"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import { drawerItemsList, navListItems } from "@/constants/navigationData";

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
        <div className="flex justify-between p-3">
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

import Link from "next/link";
import React from "react";
import Logo from "../Logo/page";

export default function HeaderTop() {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between items-center p-5 bg-slate-50">
        <div>
          <Logo />
        </div>
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
    </div>
  );
}

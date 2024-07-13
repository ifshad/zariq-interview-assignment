import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="w-44 flex items-center gap-2">
      <Image
        src="https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png"
        alt="News image"
        width={20}
        height={20}
        className="w-full"
      />
      <h1 className="card-title">
        Radial <br />
        School
      </h1>
    </div>
  );
}

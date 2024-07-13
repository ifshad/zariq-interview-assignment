import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="w-44 flex items-center gap-2">
      <div className="w-2/3 h-16 relative">
        <Image
          src="https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png"
          alt="News image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="card-title w-1/3">
        Radial <br />
        School
      </h1>
    </div>
  );
}

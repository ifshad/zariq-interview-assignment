import React from "react";
import BoldBorder from "../BoldBorder/page";
import pic from "../../public/Images/payment_image_01.png";
import Image from "next/image";

export default function Payment() {
  return (
    <div id="online-payment" className="container md:p-12">
      {/* Title */}
      <div className="w-4/5 mx-auto text-center">
        <h1 className="section-title">Online Payment</h1>
        <div className="flex justify-center">
          <BoldBorder />
        </div>
      </div>
      <div className="text-center">
        <Image src={pic} alt="payment pic" width={300} className="w-full" />
        <h1 className="subsection-title">
          Averroes International School, Online Payment
        </h1>
        <p>Helpline: 01722469999, +8809612225222</p>
        <p className="text-rose-500">
          Time Limit for Payment : 7:00 AM to 5:00 PM
        </p>
        <button className="btn my-5">Tutorial</button>
      </div>
    </div>
  );
}

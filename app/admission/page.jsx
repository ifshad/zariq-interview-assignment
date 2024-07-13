import ApplyOnline from "@/components/ApplyOnline/page";
import BriefAdProcedure from "@/components/BriefAdProcedure/page";
import HowToApply from "@/components/HowToApply/page";
import Payment from "@/components/Payment/page";
import React from "react";

export default function AdmissionPage() {
  return (
    <div>
      <BriefAdProcedure />
      <HowToApply />
      <ApplyOnline />
      <Payment />
    </div>
  );
}

import OurTeamSection from "@/components/OurTeamSection/page";
import PrinciplesMessage from "@/components/PrinciplesMessage/page";
import VisionMission from "@/components/VisionMission/page";
import WhyChooseUs from "@/components/WhyChooseUs/page";
import React from "react";

export default function AboutUsPage() {
  return (
    <div>
      <VisionMission />
      <WhyChooseUs />
      <PrinciplesMessage />
      <OurTeamSection />
    </div>
  );
}

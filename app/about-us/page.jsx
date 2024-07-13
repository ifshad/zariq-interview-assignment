import CampusTour from "@/components/CampusTour/page";
import CurriculumSection from "@/components/CurriculumSection/page";
import EventsSection from "@/components/EventsSection/page";
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
      <CurriculumSection />
      <CampusTour />
      <EventsSection />
    </div>
  );
}

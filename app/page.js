import AboutSection from "@/components/AboutSection/page";
import Banner from "@/components/Banner/page";
import ExamReminder from "@/components/ExamReminder/page";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <AboutSection />
      <ExamReminder />
    </div>
  );
}

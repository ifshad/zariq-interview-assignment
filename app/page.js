import AboutSection from "@/components/AboutSection/page";
import AgeSupport from "@/components/AgeSupport/page";
import Banner from "@/components/Banner/page";
import ExamReminder from "@/components/ExamReminder/page";
import HistorySection from "@/components/HistorySection/page";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutSection />
      <HistorySection />
      <AgeSupport />
      <ExamReminder />
    </div>
  );
}

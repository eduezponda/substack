import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import SectionBusinessObjective from "@/components/Home/SectionBusinessObjective";
import SectionWhatWereNot from "@/components/Home/SectionWhatWereNot";

export default function Home() {
  return (
    <div className="border-0 border-none">
      <Header />
      <Hero />
      <SectionBusinessObjective />
      <SectionWhatWereNot />

    </div>
  );
}

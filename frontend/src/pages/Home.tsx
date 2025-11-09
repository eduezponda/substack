import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import SectionBusinessObjective from "@/components/Home/BusinessObjectiveSection";
import SectionWhatWereNot from "@/components/Home/WhatWereNotSection";
import BlogCarouselSection from "@/components/Home/BlogCarouselSection";

export default function Home() {
  return (
    <div className="border-0 border-none">
      <Header />
      <Hero />
      <main>
        <SectionBusinessObjective />
        <SectionWhatWereNot />
        <BlogCarouselSection />
        <div className="w-full h-16 bg-red-500">Mazapan</div>
      </main>
    </div>
  );
}

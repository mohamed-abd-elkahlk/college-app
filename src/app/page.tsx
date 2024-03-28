"use client";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Services from "@/components/shared/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      {/* priceing in the feature */}
      <Contact />
    </main>
  );
}

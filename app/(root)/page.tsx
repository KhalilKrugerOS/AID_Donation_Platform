import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AID",
  description: "dev",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      <Hero />
      <AboutSectionTwo />
      <Features />
      <Brands />
      <AboutSectionOne />

      <Testimonials />
      <Blog />

      <Contact />
    </>
  );
}

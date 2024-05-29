"use client";

import { useEffect } from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };
    <ScrollUp />
   
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <>
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
     
      <div className="reveal">
      <Hero />
      </div>
      <div className="reveal">
        <AboutSectionTwo />
      </div>
      <div className="reveal">
        <Features />
      </div>
     
      <div className="reveal">
        <Brands />
      </div>
      <div className="reveal">
        <AboutSectionOne />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <Blog />
      </div>
      <div className="reveal">
        <Contact />
      </div>
    </>
  );
}


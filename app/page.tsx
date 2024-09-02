"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects"
import Footer from "@/components/Footer"
import Clients from "@/components/Clients"
import EducationCertifications from "@/components/EducationCertifications"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import TrustedBy from "@/components/TrustedBy"
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex 
    justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid/>
          <Experience/>
          <RecentProjects />
          <EducationCertifications />
          <Skills/>
          <Clients/>
          <TrustedBy/>
          <Footer/>
        </div>
    </main>
  );
}

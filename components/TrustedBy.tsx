"use client";

import React from "react";
import { companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const TrustedBy = () => {
  return (
    <section id="trusted-by" className="py-20">
      <h1 className="heading">
        Trusted by
        <span className="text-purple"> leading companies</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={companies}
            direction="left"  // Change direction if needed
            speed="normal"   // Adjust speed as necessary
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

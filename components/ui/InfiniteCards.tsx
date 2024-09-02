"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  profileImg: string;
}

interface LogoItem {
  img: string;
}

type InfiniteMovingCardsProps = {
  items: (TestimonialItem | LogoItem)[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "15s";
          break;
        case "slow":
          duration = "35s";
          break;
        default:
          duration = "25s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "relative rounded-xl border border-b-0 flex-shrink-0 border-slate-800 p-5",
              "quote" in item
                ? "w-[90vw] max-w-full md:w-[60vw] p-16" // Testimonial block styling
                : "w-[150px] h-[150px] md:w-[180px] md:h-[180px]" // Larger square block styling for logos
            )}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            {"quote" in item ? (
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  {item.profileImg && (
                    <div className="me-3">
                      <img
                        src={item.profileImg}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                  )}
                  <span className="flex flex-col gap-1">
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-white-200 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            ) : (
              item.img && (
                <div className="flex justify-center items-center h-full">
                  <img
                    src={item.img}
                    alt="Company Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

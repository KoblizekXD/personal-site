"use client";

import { offsetIndexAtom } from "@/atoms/offset-index";
import { NavBar } from "@/components/nav";
import { AboutPage } from "@/components/sections/about";
import { ContactsPage } from "@/components/sections/contacts";
import { LandingPage } from "@/components/sections/landing";
import { ProjectsPage } from "@/components/sections/projects";
import { SkillsPage } from "@/components/sections/skills";
import { useAtom } from "jotai";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

function VerticalSwipe({ children }: { children: React.ReactNode[] }) {
  const [index, setIndex] = useAtom(offsetIndexAtom);
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (e.deltaY > 0 && !isAnimatingRef.current) {
        setIndex((i) => Math.min(i + 1, children.length - 1));
        isAnimatingRef.current = true;
      } else if (e.deltaY < 0 && !isAnimatingRef.current) {
        setIndex((i) => Math.max(i - 1, 0));
        isAnimatingRef.current = true;
      }
    },
    [children.length, setIndex]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      touchEndY.current = null;
      touchStartY.current = e.targetTouches[0].clientY;
    },
    []
  );

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchEndY.current = e.targetTouches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartY.current || !touchEndY.current || isAnimatingRef.current)
      return;

    const distance = touchStartY.current - touchEndY.current;
    const isSignificantSwipe = Math.abs(distance) > 50; // Minimum swipe distance

    if (isSignificantSwipe) {
      if (distance > 0) {
        // Swipe up - move to next section
        setIndex((i) => Math.min(i + 1, children.length - 1));
        isAnimatingRef.current = true;
      } else {
        // Swipe down - move to previous section
        setIndex((i) => Math.max(i - 1, 0));
        isAnimatingRef.current = true;
      }
    }
  }, [children.length, setIndex]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: We need this
  useEffect(() => {
    const timeout = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 600);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      className="relative md:w-3/4 md:h-3/4 w-[90%] h-[90%] overflow-hidden touch-none select-none"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children.map((child, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: They are constant, so it doesn't matter
          key={i}
          className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          style={{
            transform: `translateY(${(i - index) * 100}%)`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [index, setIndex] = useAtom(offsetIndexAtom);

  return (
    <div className="relative h-screen flex items-center justify-center bg-[radial-gradient(60%_80%_at_bottom,rgba(155,60,255,0.18),transparent),radial-gradient(60%_80%_at_top,rgba(0,255,170,0.15),transparent)] md:bg-[radial-gradient(60%_80%_at_bottom_left,rgba(155,60,255,0.18),transparent),radial-gradient(60%_80%_at_top_right,rgba(0,255,170,0.15),transparent)]">
      <NavBar />
      <VerticalSwipe>
        <LandingPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactsPage />
      </VerticalSwipe>
      <div className="absolute right-4 flex flex-col items-center gap-y-4 rounded-full bg-white/10 p-2">
        <button
          className="cursor-pointer disabled:cursor-default disabled:opacity-50"
          type="button"
          title="Previous section"
          disabled={index === 0}
          onClick={() => {
            setIndex((prev) => prev - 1);
          }}
        >
          <ArrowUp />
        </button>
        <button
          className="cursor-pointer disabled:cursor-default disabled:opacity-50"
          type="button"
          title="Next section"
          disabled={index === 4}
          onClick={() => {
            setIndex((prev) => prev + 1);
          }}
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  );
}

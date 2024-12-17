/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BiRightArrowAlt, BiDownload, BiLaptop, BiPaintRoll, BiServer } from "react-icons/bi";
import { iconSize } from "@/Constants";
import Button from "@/components/Button";
import Image from "next/image";
import me from "@/../public/me.png";
import HeroCard from "@/components/HeroCard";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const
    [theme, setTheme] = useState<string>(),
    heroIconSize = 52,
    handleTheme = (event: any) => {
      if (event.matches) {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      }
      else {
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    };

  useEffect(() => {
    setTheme(localStorage.getItem("theme") as string);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleTheme);

    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleTheme);
  }, [theme]);


  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative container mt-24 flex flex-col items-center md:flex-row justify-center mx-auto min-h-svh h-full p-4 pb-0">
        <div className="gradientOne"></div>
        <div className="gradientTwo hidden lg:block"></div>

        <div className="flex flex-col space-y-10 lg:space-y-10">

          <div className="space-y-6">
            <span className="text-2xl text-textColor-lightDimmed dark:text-textColor-darkDimmed">Hi, there!</span>

            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-extrabold">
                I am Bartosz, <br className="lg:hidden" /> Software Developer <br />
                with {new Date().getFullYear() - 2019} years of expirience
              </h1>
              <p className="text-textColor-lightDimmed dark:text-textColor-darkDimmed max-w-2xl">
                I eagerly take on challenges and thrive in diverse work environments. I am characterized by a quick ability to acquire new skills, a well-developed aesthetic sense, creativity, and analytical thinking.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                icon={<BiDownload size={iconSize} className="hidden md:block" />}
                text="Download CV"
                onClick={() => alert("Clicked")}
                className="btn-white"
              />
              <Button
                icon={<BiRightArrowAlt size={iconSize} className="hidden md:block" />}
                text="Contact me"
                onClick={() => alert("Clicked")} />
            </div>
          </div>

          <div className="text-xl space-y-4">
            <h3 className="font-black">MY SERVICES</h3>

            <div className="flex flex-col gap-10 lg:flex-row items-center">
              <HeroCard
                icon={<BiLaptop size={heroIconSize} className="fill-primary-default" />}
                title="Frontend"
                desc="I build efficient, scalable, and user-focused interfaces."
              />

              <HeroCard
                icon={<BiPaintRoll size={heroIconSize} className="fill-primary-default" />}
                title="UX/UI"
                desc="I design intuitive, user-focused, and visually appealing interfaces."
              />

              <HeroCard
                icon={<BiServer size={heroIconSize} className="fill-primary-default" />}
                title="Backend"
                desc="I create reliable, efficient, and scalable backend solutions."
              />
            </div>
          </div>

        </div>
        <Image
          src={me}
          alt="me"
          className="absolute right-0.5 hidden self-end h-5/6 min-w-3/5 w-auto xl:block hero-img -z-40"
          style={{ mixBlendMode: `${theme === "light" ? "hard-light" : "plus-lighter"}` }} />


      </div>
    </section>
  );
};

export default HeroSection;
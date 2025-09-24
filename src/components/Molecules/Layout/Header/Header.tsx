"use client";
import React from "react";
import Image from "next/image";
import { useThemeAssets } from "@/theme/useThemeAssets";
import { useTheme } from "@/theme/ThemeContext";

const Header = () => {
  const { images } = useThemeAssets();
  const { mode, toggleTheme } = useTheme();
  return (
    <div className="fixed top-0 z-50 bg-transparent dark:transparent backdrop-blur-md pt-[32px] pb-[20px] px-[160px] m-0 flex flex-row justify-between items-center w-full">
      <div className="flex flex-row gap-2 items-center">
        <Image src={images.Logo} alt="logo" width={48} height={48} />
        <span className="text-[20px] font-[600] leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
          AI Chatbot
        </span>
      </div>

      <div className="flex flex-row items-center gap-16">
        <div className="flex flex-row items-center gap-4">
          <span className="font-[500] text-[20px] leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
            Overview
          </span>
          <span className="font-[500] text-[20px] leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
            Compared Plans
          </span>
          <span className="font-[500] text-[20px] leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
            FAQ
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center bg-[#FFFFFF1A] dark:bg-[#323232] px-[20px] py-[12px] rounded-[14px] gap-2 hover:bg-[#FFFFFF2A] dark:hover:bg-[#9E9E9E] transition-colors duration-200"
          >
            <Image src={images.theme} alt="theme" width={24} height={24} />
            <span className="font-[500] text-[20px] leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
              {mode === "light" ? "Light" : "Dark"}
            </span>
          </button>{" "}
          <button className="flex items-center justify-center bg-[#FFFFFF1A] dark:bg-[#323232] px-[20px] py-[12px] rounded-[14px] hover:bg-[#FFFFFF2A] dark:hover:bg-[#9E9E9E] transition-colors duration-200">
            <span className="font-[500] text-[20px] leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
              Log in
            </span>
          </button>{" "}
          <button className="flex items-center justify-center bg-[linear-gradient(95.62deg,_#26B77D_0%,_#00B0A7_109.69%)] px-[20px] py-[12px] rounded-[14px] hover:opacity-90 transition-opacity duration-200">
            <span className="font-[500] text-[20px] leading-[32px] text-[#FFFFFF]">
              Start for free
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

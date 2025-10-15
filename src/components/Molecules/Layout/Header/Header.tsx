"use client";
import React from "react";
import Image from "next/image";
import { useThemeAssets } from "@/theme/useThemeAssets";
import { useTheme } from "@/theme/ThemeContext";
import { useRouter, usePathname } from "next/navigation";
import MobileMenuDialog from "./MobileMenuDialog";

const Header = () => {
  const { images } = useThemeAssets();
  const { mode, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  // Function to determine if a navigation item is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Function to get the color for navigation items
  const getNavColor = (path: string) => {
    return isActive(path) ? "#10A469" : "#9E9E9F";
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-50 bg-transparent dark:transparent backdrop-blur-md pt-[32px] pb-[20px] xl:px-[160px] sm:px-[20px] px-[12px] m-0 flex flex-row justify-between items-center w-[100vw]">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src={images.Logo}
          alt="logo"
          width={48}
          height={48}
          className="w-[44px] h-[44px] xl:w-[48px] xl:h-[48px]"
        />
        <span className="xl:text-[20px] text-[18px] font-[500] xl:font-[600] xl:leading-[32px] leading-[28px] text-[#000000] dark:text-[#FFFFFF]">
          AI Chatbot
        </span>
      </div>

      <div className="flex flex-row items-center gap-[4vw]">
        <div className="sm:flex flex-row items-center gap-4 hidden">
          <span
            onClick={() => router.push("/")}
            className={`${
              isActive("/") ? "font-[600]" : "font-[500]"
            } hover:text-[#E2E2E2] xl:text-[20px] xl:leading-[32px] text-[18px] leading-[28px] cursor-pointer transition-colors duration-200`}
            style={{ color: getNavColor("/") }}
          >
            Overview
          </span>
          <span
            onClick={() => router.push("/compared")}
            className={`${
              isActive("/compared") ? "font-[600]" : "font-[500]"
            } hover:text-[#E2E2E2] xl:text-[20px] xl:leading-[32px] text-[18px] leading-[28px] cursor-pointer transition-colors duration-200`}
            style={{ color: getNavColor("/compared") }}
          >
            Compared Plans
          </span>
          <span
            onClick={() => router.push("/faq")}
            className={`${
              isActive("/faq") ? "font-[600]" : "font-[500]"
            } hover:text-[#E2E2E2] xl:text-[20px] xl:leading-[32px] text-[18px] leading-[28px] cursor-pointer transition-colors duration-200`}
            style={{ color: getNavColor("/faq") }}
          >
            FAQ
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-[110px] h-[52px] sm:flex hidden items-center justify-center bg-[#FFFFFF1A] dark:bg-[#323232] px-[20px] py-[12px] rounded-[14px] gap-2 hover:bg-[#FFFFFF2A] dark:hover:bg-[#9E9E9E] transition-colors duration-200"
          >
            <Image
              src={images.theme}
              alt="theme"
              width={24}
              height={24}
              className="w-5 h-5 xl:w-6 xl:h-6"
            />
            <span className="font-[600] xl:text-[18px] text-[16px] leading-[20px] xl:leading-[28px] text-[#000000] dark:text-[#FFFFFF]">
              {mode === "light" ? "Light" : "Dark"}
            </span>
          </button>{" "}
          <button className="w-[110px] h-[52px] sm:flex hidden items-center justify-center bg-[#FFFFFF1A] dark:bg-[#323232] px-[20px] py-[12px] rounded-[14px] hover:bg-[#FFFFFF2A] dark:hover:bg-[#9E9E9E] transition-colors duration-200">
            <span className="font-[600] xl:text-[18px] text-[16px] leading-[20px] xl:leading-[28px] text-[#000000] dark:text-[#FFFFFF]">
              Log in
            </span>
          </button>{" "}
          <div className="glow-container rounded-[14px] h-[52px]">
            <button className="flex h-[52px] items-center justify-center bg-[linear-gradient(95.62deg,_#26B77D_0%,_#00B0A7_109.69%)] px-[20px] sm:py-[12px] py-[8px] rounded-[14px] hover:opacity-90 transition-opacity duration-200 cursor-pointer">
              <span className="font-[600] xl:text-[18px] text-[16px] leading-[20px] xl:leading-[28px] text-[#FFFFFF]">
                Start for free
              </span>
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="sm:hidden block"
          >
            <Image
              src={images.icHeaderMenu}
              alt="menu"
              width={24}
              height={24}
              className="w-6 h-6 xl:w-8 xl:h-8"
            />
          </button>
        </div>
      </div>
      <MobileMenuDialog
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={(path) => router.push(path)}
        onToggleTheme={toggleTheme}
        themeLabel={mode === "light" ? "Light" : "Dark"}
      />
    </div>
  );
};

export default Header;

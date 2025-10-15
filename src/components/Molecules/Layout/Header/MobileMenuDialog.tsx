"use client";
import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/theme/ThemeContext";
import { useThemeAssets } from "@/theme/useThemeAssets";
import Image from "next/image";

type MobileMenuDialogProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onToggleTheme: () => void;
  themeLabel: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MobileMenuDialog({
  open,
  onClose,
  onNavigate,
  onToggleTheme,
  themeLabel,
}: MobileMenuDialogProps) {
  const router = useRouter();
  const { mode, toggleTheme } = useTheme();
  const { images } = useThemeAssets();
  const pathname = usePathname();

  const handleNavigate = (path: string) => {
    router.push(path);
    onClose();
  };

  // Function to determine if a navigation item is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Function to get the color for navigation items
  const getNavColor = (path: string) => {
    return isActive(path) ? "#10A469" : "#9E9E9F";
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      slotProps={{
        paper: {
          className:
            "flex w-[350px] !justify-center !rounded-[24px] !bg-[#0A0F0D] !m-[20px] overflow-hidden",
        },
      }}
    >
      <div className="flex flex-col items-end justify-end gap-[4vw] bg-[#0A0F0D] w-[300px] py-10  rounded-[24px]">
        <div
          className="flex flex-col
         items-end gap-4 w-full"
        >
          <span
            onClick={() => handleNavigate("/")}
            className="font-[500] xl:text-[20px] xl:leading-[32px] text-[18px] leading-[28px] cursor-pointer transition-colors duration-200"
            style={{ color: getNavColor("/") }}
          >
            Overview
          </span>
          <span
            onClick={() => handleNavigate("/compared")}
            className="font-[500] xl:text-[20px] xl:leading-[32px] text-[18px] leading-[28px] cursor-pointer transition-colors duration-200"
            style={{ color: getNavColor("/compared") }}
          >
            Compared Plans
          </span>
          <span
            onClick={() => handleNavigate("/faq")}
            className="font-[500] xl:text-[20px] xl:leading-[32px] text-[18px] leading-[28px] cursor-pointer transition-colors duration-200"
            style={{ color: getNavColor("/faq") }}
          >
            FAQ
          </span>
        </div>
        <div className="flex flex-col items-end w-full gap-4">
          <button
            onClick={toggleTheme}
            className="flex w-1/2 items-center justify-center bg-[#FFFFFF1A] dark:bg-[#323232] px-[20px] py-[12px] rounded-[14px] gap-2 hover:bg-[#FFFFFF2A] dark:hover:bg-[#9E9E9E] transition-colors duration-200"
          >
            <Image
              src={images.theme}
              alt="theme"
              width={24}
              height={24}
              className="w-5 h-5 xl:w-6 xl:h-6"
            />
            <span className="font-[600] xl:text-[20px] text-[14px] leading-[20px] xl:leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
              {mode === "light" ? "Light" : "Dark"}
            </span>
          </button>{" "}
          <button className="flex w-1/2 items-center justify-center bg-[#FFFFFF1A] dark:bg-[#323232] px-[20px] py-[12px] rounded-[14px] hover:bg-[#FFFFFF2A] dark:hover:bg-[#9E9E9E] transition-colors duration-200">
            <span className="font-[600] xl:text-[20px] text-[14px] leading-[20px] xl:leading-[32px] text-[#000000] dark:text-[#FFFFFF]">
              Log in
            </span>
          </button>
        </div>
      </div>
    </Dialog>
  );
}

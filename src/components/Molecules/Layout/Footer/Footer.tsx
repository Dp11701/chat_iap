"use client";
import React from "react";
import Image from "next/image";
import { useThemeAssets } from "@/theme/useThemeAssets";
import { useTheme } from "@/theme/ThemeContext";

const Footer = () => {
  const { images } = useThemeAssets();
  const { mode, toggleTheme } = useTheme();
  return (
    <div className="bg-[#101613] pt-[32px] sm:pb-20 pb-10 sm:px-[160px] px-[12px] m-0 flex flex-col w-full items-center justify-center">
      <div className="flex flex-row justify-between items-centers w-full">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src={images.Logo}
            alt="logo"
            width={48}
            height={48}
            className="w-[28px] h-[28px] xl:w-[48px] xl:h-[48px]"
          />
          <span className="sm:text-[20px] font-[600] sm:leading-[32px] text-[20px] leading-[28px] text-[#000000] dark:text-[#FFFFFF]">
            AI Chatbot
          </span>
        </div>
        <div className="sm:flex hidden flex-row gap-10 items-center">
          <span
            onClick={() =>
              window.open(
                "https://chat-ai-terms.begamob.com/terms-of-service",
                "_blank"
              )
            }
            className="text-[18px] font-[500] leading-[28px] text-[#10A469] cursor-pointer"
          >
            Terms Of Use
          </span>
          <span
            onClick={() =>
              window.open(
                "https://chat-ai-terms.begamob.com/privacy-policy",
                "_blank"
              )
            }
            className="text-[18px] font-[500] leading-[28px] text-[#10A469] cursor-pointer"
          >
            Privacy Policy
          </span>
          <span
            onClick={() =>
              window.open(
                "https://chat-ai-terms.begamob.com/subscription-term",
                "_blank"
              )
            }
            className="text-[18px] font-[500] leading-[28px] text-[#10A469] cursor-pointer"
          >
            Subscription Terms
          </span>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <Image
            src={images.icInstagram}
            alt="instagram"
            width={32}
            height={32}
          />
          <Image
            src={images.icFacebook}
            alt="facebook"
            width={32}
            height={32}
          />
          <Image src={images.icX} alt="twitter" width={32} height={32} />
          <Image
            src={images.icLinkedin}
            alt="linkedin"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="flex sm:hidden flex-row gap-10 items-center mt-4">
        <span
          onClick={() =>
            window.open(
              "https://chat-ai-terms.begamob.com/terms-of-service",
              "_blank"
            )
          }
          className="sm:text-[18px] text-[14px] font-[500] sm:leading-[28px] leading-[20px] text-[#10A469] cursor-pointer"
        >
          Terms Of Use
        </span>
        <span
          onClick={() =>
            window.open(
              "https://chat-ai-terms.begamob.com/privacy-policy",
              "_blank"
            )
          }
          className="sm:text-[18px] text-[14px] font-[500] sm:leading-[28px] leading-[20px] text-[#10A469] cursor-pointer"
        >
          Privacy Policy
        </span>
        <span
          onClick={() =>
            window.open(
              "https://chat-ai-terms.begamob.com/subscription-term",
              "_blank"
            )
          }
          className="sm:text-[18px] text-[14px] font-[500] sm:leading-[28px] leading-[20px] text-[#10A469] cursor-pointer"
        >
          Subscription Terms
        </span>
      </div>
      <span className="font-[400] sm:text-[18px] text-[14px] sm:leading-[28px] leading-[20px] text-[#9E9E9E] mt-10">
        Copyright © 2025 Begamob Studio, 36 HC, Vietnam
      </span>
      <span className="font-[400] sm:text-[18px] text-[14px] sm:leading-[28px] leading-[20px] text-[#9E9E9E] mt-3">
        2025 AI Chatbot All right reserved
      </span>
    </div>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useThemeAssets } from "@/theme/useThemeAssets";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle,
}) => {
  const { images } = useThemeAssets();

  return (
    <div className="border-b border-[#FFFFFF1A] last:border-b-0">
      <button
        onClick={onToggle}
        className="bg-transparent w-full flex items-center justify-between py-6 px-6 text-left hover:bg-[#FFFFFF05] transition-all duration-200 active:scale-[0.98]"
      >
        <span className="font-[500] text-[18px] leading-[28px] text-[#FFFFFF] flex-1 pr-4">
          {question}
        </span>
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center transition-transform duration-300 ease-in-out">
            <Image
              src={isOpen ? images.IcExpand : images.IcCollapse}
              alt={isOpen ? "Collapse" : "Expand"}
              width={28}
              height={28}
              className="transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <p className="font-[400] text-[16px] leading-[24px] text-[#9E9E9F]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;

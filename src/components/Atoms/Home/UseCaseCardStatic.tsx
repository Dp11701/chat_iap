"use client";

import React from "react";
import Image from "next/image";

interface UseCaseCardStaticProps {
  title: string;
  image: string;
}

const UseCaseCardStatic: React.FC<UseCaseCardStaticProps> = ({
  title,
  image,
}) => {
  return (
    <div
      className="flex flex-row gap-2 items-center justify-center rounded-[16px] py-[12px] xl:px-[20px] sm:px-[12px] px-[4px] w-[200px]"
      style={{
        background: "#1F2121",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Image src={image} alt={title} width={28} height={28} />
      <span className="font-[500] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] text-[#FFFFFF]">
        {title}
      </span>
    </div>
  );
};

export default UseCaseCardStatic;

import React from "react";
import Image from "next/image";

const ActionCard = (props: {
  title: string;
  image: string;
  active_image?: string;
  description: string;
}) => {
  const activeImage = props.active_image ?? props.image;
  return (
    <div className="rounded-[28px] group flex flex-col items-center justify-center relative transition-transform duration-200 ease-out will-change-transform hover:scale-110 bg-[#101613]">
      <Image
        src={props.image}
        alt={props.title}
        width={354}
        height={440}
        className="transition-opacity duration-200 ease-in-out group-hover:opacity-0"
      />
      <Image
        src={activeImage}
        alt={`${props.title} active`}
        width={354}
        height={440}
        className="absolute top-0 left-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
      />
      <div className="flex flex-col items-start  absolute top-10 left-5 w-full h-full">
        <span className="font-[600] text-[28px] leading-[45px] text-[#E2E2E2]">
          {props.title}
        </span>
        <span className="font-[400] text-[20px] leading-[32px] text-[#E2E2E2]">
          {props.description}
        </span>
      </div>
    </div>
  );
};

export default ActionCard;

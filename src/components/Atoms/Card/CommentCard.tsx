import React from "react";
import Image from "next/image";
import { useThemeAssets } from "@/theme/useThemeAssets";

export type User = {
  name: string;
  image: string;
  role: string;
};

const CommentCard = (props: { comment: string; name: string; user: User }) => {
  const { images } = useThemeAssets();
  return (
    <div className="flex flex-col gap-2 bg-[#101613] rounded-[20px] p-[24px]  justify-between transition-transform duration-200 ease-out hover:scale-105">
      <span className="font-[600] text-[20px] leading-[32px] text-[#FFFFFF]">
        {props.name}
      </span>
      <span className="font-[400] text-[18px] leading-[28px] text-[#E2E2E2]">
        {props.comment}
      </span>
      <div className="flex flex-row gap-2 items-center justify-between w-full">
        <div className="flex flex-row gap-2 items-center justify-start">
          <Image
            src={props.user.image}
            alt={props.user.name}
            width={48}
            height={48}
          />
          <div className="gap-2 flex flex-col items-start justify-start">
            <span className="font-[500] text-[18px] leading-[28px] text-[#ffffff]">
              {props.user.name}
            </span>
            <span className="font-[400] text-[16px] leading-[24px] text-[#9E9E9E]">
              {props.user.role}
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Image src={images.icStar} alt="star" width={20} height={20} />
          <Image src={images.icStar} alt="star" width={20} height={20} />
          <Image src={images.icStar} alt="star" width={20} height={20} />
          <Image src={images.icStar} alt="star" width={20} height={20} />
          <Image src={images.icStar} alt="star" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

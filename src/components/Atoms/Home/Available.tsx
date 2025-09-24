import React from "react";
import Image from "next/image";

const Available = (props: { title: string; image: string; link: string }) => {
  const handleClick = () => {
    window.open(props.link, "_blank");
  };
  return (
    <div
      className="flex flex-row items-center justify-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
      <Image src={props.image} alt={props.title} width={48} height={48} />
      <span className="font-[400] text-[28px] leading-[45px] text-[#9E9E9F]">
        {props.title}
      </span>
    </div>
  );
};

export default Available;

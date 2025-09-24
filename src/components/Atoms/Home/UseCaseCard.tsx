import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const UseCaseCard = (props: {
  title: string;
  image: string;
  isVisible?: boolean;
  isFlashing?: boolean;
}) => {
  return (
    <div
      className="p-[1px] rounded-[16px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(7, 7, 7, 0.1) 100%)",
      }}
    >
      <motion.div
        className="flex flex-row gap-2 items-center justify-center rounded-[16px] py-[12px] px-[20px]"
        animate={{
          background: props.isFlashing
            ? "linear-gradient(208.95deg, #15B475 -12.59%, rgba(42, 55, 58, 0.45) 93.51%)"
            : "#1F2121",
          scale: props.isFlashing ? 1.02 : 1,
          boxShadow: props.isFlashing
            ? "0 8px 32px rgba(21, 180, 117, 0.3)"
            : "0 4px 16px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Image src={props.image} alt={props.title} width={28} height={28} />
        <span className="font-[500] text-[20px] leading-[32px] text-[#FFFFFF]">
          {props.title}
        </span>
      </motion.div>
    </div>
  );
};

export default UseCaseCard;

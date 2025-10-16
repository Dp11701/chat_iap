import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const UseCaseCard = (props: {
  title: string;
  image: string;
  flashDelayMs?: number;
}) => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const delay = props.flashDelayMs ?? 0;
    const start = setTimeout(() => {
      setIsFlashing(true);
      const stop = setTimeout(() => setIsFlashing(false), 1000);
      return () => clearTimeout(stop);
    }, delay);
    return () => clearTimeout(start);
  }, [props.flashDelayMs]);
  return (
    <div
      className="p-[1px] rounded-[16px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(7, 7, 7, 0.1) 100%)",
      }}
    >
      <motion.div
        className="flex flex-row  gap-2 items-center justify-center rounded-[16px] py-[12px] xl:px-[20px] sm:px-[12px] px-[4px]"
        animate={{
          background: isFlashing
            ? "linear-gradient(208.95deg, #15B475 -12.59%, rgba(42, 55, 58, 0.45) 93.51%)"
            : "#1F2121",
          scale: isFlashing ? 1.02 : 1,
          boxShadow: isFlashing
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
        <span className="font-[500] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] text-[#FFFFFF]">
          {props.title}
        </span>
      </motion.div>
    </div>
  );
};

export default UseCaseCard;

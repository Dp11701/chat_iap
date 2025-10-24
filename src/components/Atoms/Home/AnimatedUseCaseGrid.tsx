"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import UseCaseCard from "./UseCaseCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import UseCaseCardStatic from "./UseCaseCardStatic";
interface AnimatedUseCaseGridProps {
  useCases: Array<{ title: string; image: string }>;
}

const AnimatedUseCaseGrid: React.FC<AnimatedUseCaseGridProps> = ({
  useCases,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Embla carousel setup with autoplay
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [autoplay.current]
  );

  // Intersection Observer để detect khi component vào viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsInView(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  // No per-item timers; we use Framer Motion variants for smooth stagger without extra renders

  // Chia 2 hàng như trước (memoized)
  const { firstRow, secondRow } = useMemo(() => {
    const firstRowCount = Math.min(5, useCases.length);
    return {
      firstRow: useCases.slice(0, firstRowCount),
      secondRow: useCases.slice(firstRowCount),
    };
  }, [useCases]);

  // Framer Motion variants với hiệu ứng hiển thị từng thẻ một
  const containerRow1Variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // Hiển thị từng thẻ cách nhau 0.2s
        when: "beforeChildren",
      },
    },
  };
  const containerRow2Variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // Hiển thị từng thẻ cách nhau 0.15s
        delayChildren: 0.5, // Delay 0.5s sau khi hàng đầu hoàn thành
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hàng đầu */}
      <motion.div
        className="hidden sm:grid grid-cols-5 items-center justify-center xl:gap-4 sm:gap-3 gap-2 mx-20"
        variants={containerRow1Variants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {firstRow.map((useCase, index) => (
          <motion.div key={index} variants={itemVariants}>
            <UseCaseCard
              title={useCase.title}
              image={useCase.image}
              flashDelayMs={index * 1000}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Hàng sau */}
      <motion.div
        className="hidden sm:grid grid-cols-6 items-center justify-center xl:gap-4 sm:gap-3 gap-1"
        variants={containerRow2Variants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {secondRow.map((useCase, index) => (
          <motion.div key={index} variants={itemVariants}>
            <UseCaseCard
              title={useCase.title}
              image={useCase.image}
              flashDelayMs={firstRow.length * 1000 + 200 + index * 1000}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CSS Animation Carousel - 2 rows */}
      <div className="sm:hidden flex flex-col gap-0">
        {/* Row 1 - Left to Right */}
        <div
          className="overflow-hidden h-20 bg-transparent"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 10% 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 10% 90%, transparent)",
          }}
        >
          <div
            className="flex relative"
            style={{
              width: "100%",
              minWidth: `${200 * useCases.length}px`,
              height: "100%",
            }}
          >
            {useCases.map((useCase, index) => (
              <div
                key={`row1-${index}`}
                className="absolute h-full transition-all duration-500"
                style={{
                  width: "200px",
                  height: "100%",
                  left: "100%",
                  animation: `autoRun 30s linear infinite`,
                  animationDelay: `${(30 / useCases.length) * index - 30}s`,
                  zIndex: useCases.length - index,
                }}
              >
                <div className="w-full h-full p-2">
                  <UseCaseCardStatic
                    title={useCase.title}
                    image={useCase.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div
          className="overflow-hidden h-20 bg-transparent"
          style={{
            maskImage:
              "linear-gradient(to left, transparent, #000 10% 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to left, transparent, #000 10% 90%, transparent)",
          }}
        >
          <div
            className="flex relative"
            style={{
              width: "100%",
              minWidth: `${200 * useCases.length}px`,
              height: "100%",
            }}
          >
            {useCases.map((useCase, index) => (
              <div
                key={`row2-${index}`}
                className="absolute h-full transition-all duration-500"
                style={{
                  width: "200px",
                  height: "100%",
                  left: "-200px",
                  animation: `autoRunReverse 30s linear infinite`,
                  animationDelay: `${(30 / useCases.length) * index - 30}s`,
                  zIndex: useCases.length - index,
                }}
              >
                <div className="w-full h-full p-2">
                  <UseCaseCardStatic
                    title={useCase.title}
                    image={useCase.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedUseCaseGrid;

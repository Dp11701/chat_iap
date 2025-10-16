"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
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
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [flashingCard, setFlashingCard] = useState<number | null>(null);
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

  // Animation logic khi component trong view
  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const timer = setInterval(() => {
      setVisibleCards((prev) => [...prev, i]);
      setFlashingCard(i);
      setTimeout(() => setFlashingCard(null), 1000);
      i++;
      if (i >= useCases.length) clearInterval(timer);
    }, 400);

    return () => clearInterval(timer);
  }, [isInView, useCases.length]);

  // Chia 2 hàng như trước
  const firstRow = useCases.slice(0, 5);
  const secondRow = useCases.slice(5);

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hàng đầu */}
      <div className="hidden sm:grid grid-cols-5 items-center justify-center xl:gap-4 sm:gap-3 gap-2 mx-20">
        {firstRow.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -15 }}
            animate={{
              opacity: visibleCards.includes(index) ? 1 : 0,
              y: visibleCards.includes(index) ? 0 : 30,
              scale: visibleCards.includes(index) ? 1 : 0.8,
              rotateX: visibleCards.includes(index) ? 0 : -15,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 0.8,
              delay: index * 0.08,
            }}
          >
            <UseCaseCard
              title={useCase.title}
              image={useCase.image}
              isVisible={visibleCards.includes(index)}
              isFlashing={flashingCard === index}
            />
          </motion.div>
        ))}
      </div>

      {/* Hàng sau */}
      <div className="hidden sm:grid grid-cols-6 items-center justify-center xl:gap-4 sm:gap-3 gap-1">
        {secondRow.map((useCase, index) => {
          const actualIndex = index + 5;
          return (
            <motion.div
              key={actualIndex}
              initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -15 }}
              animate={{
                opacity: visibleCards.includes(actualIndex) ? 1 : 0,
                y: visibleCards.includes(actualIndex) ? 0 : 30,
                scale: visibleCards.includes(actualIndex) ? 1 : 0.8,
                rotateX: visibleCards.includes(actualIndex) ? 0 : -15,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 0.8,
                delay: actualIndex * 0.08,
              }}
            >
              <UseCaseCard
                title={useCase.title}
                image={useCase.image}
                isVisible={visibleCards.includes(actualIndex)}
                isFlashing={flashingCard === actualIndex}
              />
            </motion.div>
          );
        })}
      </div>

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

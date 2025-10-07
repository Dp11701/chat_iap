"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UseCaseCard from "./UseCaseCard";

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
        threshold: 0.3, // Trigger khi 30% của component visible
        rootMargin: "0px 0px -100px 0px", // Trigger sớm hơn 100px
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  // Animation logic chỉ chạy khi component trong view
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      if (currentIndex < useCases.length) {
        setVisibleCards((prev) => [...prev, currentIndex]);
        setFlashingCard(currentIndex); // Set card hiện tại đang flash
        setCurrentIndex((prev) => prev + 1);

        // Sau 1 giây, tắt flash effect
        setTimeout(() => {
          setFlashingCard(null);
        }, 1000);
      } else {
        clearInterval(timer);
      }
    }, 500); // Delay 300ms giữa mỗi card (mượt mà hơn)

    return () => clearInterval(timer);
  }, [currentIndex, useCases.length, isInView]);

  // Chia useCases thành 2 hàng: 5 cái đầu và còn lại
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
      {/* Hàng đầu - 5 cái */}
      <div className="hidden sm:grid grid-cols-5 items-center justify-center xl:gap-10 sm:gap-6 gap-2 mx-20">
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

      {/* Hàng sau - còn lại */}
      <div className="hidden sm:grid grid-cols-6 items-center justify-center xl:gap-10 sm:gap-2 gap-1">
        {secondRow.map((useCase, index) => {
          const actualIndex = index + 5; // Offset để match với visibleCards
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

      <div className="grid sm:hidden grid-cols-3 items-center justify-center xl:gap-10 sm:gap-2 gap-3">
        {useCases.map((useCase, index) => {
          const actualIndex = index + 5; // Offset để match với visibleCards
          return (
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
                isVisible={visibleCards.includes(actualIndex)}
                isFlashing={flashingCard === actualIndex}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AnimatedUseCaseGrid;

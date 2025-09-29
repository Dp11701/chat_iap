"use client";
import React, { useState } from "react";
import FAQItem from "./FAQItem";

interface FAQData {
  id: string;
  question: string;
  answer: string;
}

interface FAQListProps {
  faqs: FAQData[];
  className?: string;
}

const FAQList: React.FC<FAQListProps> = ({ faqs, className = "" }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div
        className="relative bg-[#101613] rounded-[20px] overflow-hidden p-[2px]"
        style={{
          background: "linear-gradient(95.62deg, #26B77D 0%, #00B0A7 109.69%)",
        }}
      >
        <div className="bg-[#101613] rounded-[18px] overflow-hidden">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.has(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQList;

import React from "react";

const SecondContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full pb-10 bg-transparent overflow-hidden pt-[108px]">
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SecondContent;

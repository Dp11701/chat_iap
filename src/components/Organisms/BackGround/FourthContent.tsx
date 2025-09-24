import React from "react";

const FourthContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full  bg-transparent overflow-hidden">
      <div
        className="
          pointer-events-none
        absolute left-[200px] bottom-[-700px] -translate-x-1/2 -translate-y-1/2
          w-[1000px] h-[1000px]
          rounded-full
        "
        style={{
          background: "radial-gradient(circle, #00A375 -100%, transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FourthContent;

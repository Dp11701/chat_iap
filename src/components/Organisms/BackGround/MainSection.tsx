import React from "react";

const MainSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-[100vh] bg-transparent overflow-hidden pt-[108px]">
      <div
        className="
          pointer-events-none
        absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2
          w-[800px] h-[800px]
          rounded-full
        "
        style={{
          background: "radial-gradient(circle, #00A375 -90%, transparent 70%)",
        }}
      />
      <div
        className="
          pointer-events-none
        absolute right-0 top-10 translate-x-1/3 -translate-y-1/3
          w-[1000px] h-[1000px]
          rounded-full
        "
        style={{
          background: "radial-gradient(circle, #00A375 -90%, transparent 70%)",
        }}
      />
      <div
        className="
          pointer-events-none
        absolute  bottom-[-20px] left-1/3 
          w-[400px] h-[400px]
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

export default MainSection;

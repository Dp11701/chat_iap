import React from "react";

const MainSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-auto bg-transparent overflow-hidden pt-[108px]">
      <div
        className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 sm:w-[800px] sm:h-[800px] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, #00A375 -90%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-10 translate-x-1/3 -translate-y-1/3 sm:w-[1000px] sm:h-[1000px] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, #00A375 -90%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20px] left-1/3 sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] rounded-full"
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

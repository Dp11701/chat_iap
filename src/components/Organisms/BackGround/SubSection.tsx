import React from "react";

const MainSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full sm:h-[578px] h-[420px] bg-transparent overflow-hidden rounded-[60px]">
      {/* First gradient circle - top left */}
      <div
        className="
          pointer-events-none
          absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2
          sm:w-[800px] sm:h-[800px] w-[400px] h-[400px]
          rounded-full
        "
        style={{
          background: "radial-gradient(circle, #00A375 -90%, transparent 70%)",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)",
            filter: "blur(1px)",
          }}
        />
      </div>

      {/* Second gradient circle - top right */}
      <div
        className="
          pointer-events-none
          absolute right-0 sm:top-10 top-20 translate-x-1/3 -translate-y-1/3
          sm:w-[1000px] sm:h-[1000px] w-[500px] h-[500px]
          rounded-full
        "
        style={{
          background: "radial-gradient(circle, #00A375 -90%, transparent 70%)",
        }}
      />

      {/* Third gradient circle - bottom left */}
      <div
        className="
          pointer-events-none
          absolute bottom-[-200px] left-1/10 
          sm:w-[700px] sm:h-[700px] w-[350px] h-[350px]
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

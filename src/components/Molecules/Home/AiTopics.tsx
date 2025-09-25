import React from "react";

const AiTopics = () => {
  return (
    <div className="flex flex-row items-center justify-center mx-[10vw] my-10 gap-20">
      <div className="flex flex-col items-start justify-center gap-4 w-1/3">
        <span className="font-[600] text-[28px] leading-[45px] text-[#FFFFFF]">
          AI Topics
        </span>
        <span className="font-[400] text-[20px] leading-[32px] text-[#E2E2E2]">
          Chat AI can assist you in a variety of ways, including answering
          questions, providing recommendations, and helping you with
          problem-solving tasks.{" "}
        </span>
        <button className="bg-[#10A469] p-[20px] rounded-[20px] w-full cursor-pointer">
          <span className="font-[600] text-[28px] leading-[45px] text-[#FFFFFF]">
            Try Now
          </span>
        </button>
      </div>
      <div className="flex flex-row rounded-[48px] w-2/3">
        <div className="col-span-1">
          <video
            className="w-full h-auto rounded-[48px]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/anim.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AiTopics;

import React from "react";

const AiTopics = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center sm:mx-[10vw] mx-4 my-10 gap-20">
      <div className="flex sm:hidden flex-row rounded-[48px] w-full">
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
      <div className="flex flex-col sm:items-start items-center text-center justify-center gap-4 sm:w-1/3 w-full">
        <span className="font-[600] xl:text-[28px] xl:leading-[45px] sm:text-[24px] sm:leading-[40px] text-[#FFFFFF]">
          AI Topics
        </span>
        <span className="font-[400] xl:text-[20px] xl:leading-[32px] sm:text-[16px] sm:leading-[24px] text-[#E2E2E2]">
          Chat AI can assist you in a variety of ways, including answering
          questions, providing recommendations, and helping you with
          problem-solving tasks.{" "}
        </span>
        <button className="bg-[#10A469] xl:p-[20px] sm:p-[16px] p-[12px] sm:rounded-[20px] rounded-[16px] w-full cursor-pointer">
          <span className="font-[600] xl:text-[28px] xl:leading-[45px] sm:text-[22px] sm:leading-[35px] text-[#FFFFFF]">
            Try Now
          </span>
        </button>
      </div>
      <div className="sm:flex hidden flex-row rounded-[48px] w-2/3">
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

"use client";
import React, { useState } from "react";
import MainSection from "@/components/Organisms/BackGround/MainSection";
import AllInOneButton from "@/components/Atoms/Home/AllInOneButton";
import SubSection from "@/components/Organisms/BackGround/SubSection";
import FifthContent from "@/components/Organisms/BackGround/FifthContent";
import CommentGrid from "@/components/Atoms/Home/CommentGrid";
import { feedback } from "@/data/feedback";
import Image from "next/image";
import { useThemeAssets } from "@/theme/useThemeAssets";
import Toast from "@/components/Atoms/Toast/Toast";

const Benefits = (props: { title: string }) => {
  const { images } = useThemeAssets();
  return (
    <div className="flex flex-row gap-2 items-start justify-start">
      <Image src={images.icDone} alt="done" width={24} height={24} />
      <span className="font-[400] text-[18px] leading-[28px] text-[#E2E2E2]">
        {props.title}
      </span>
    </div>
  );
};

const Compared = () => {
  const { images } = useThemeAssets();
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success" as "success" | "error" | "info",
  });
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetVoucher = () => {
    if (!email.trim()) {
      setToast({
        isVisible: true,
        message: "Please enter your email address",
        type: "error",
      });
      return;
    }

    // Simulate email sending
    setEmail("");
    setToast({
      isVisible: true,
      message: "Voucher sent successfully! Check your email.",
      type: "success",
    });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };
  return (
    <div>
      <MainSection>
        <div className="flex flex-col items-center justify-center my-20">
          <AllInOneButton title="Pricing & Plan" />
          <span className="font-[600] text-[34px] leading-[54px] text-[#FFFFFF] mt-16">
            A plan for every need
          </span>
          <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6">
            Choose from tailored packages that fits your goals and timeline.
          </span>
          <div className="flex flex-row gap-10 mt-10 bg-transparent">
            {/* first column */}
            <div
              className="flex flex-col gap-4 bg-[#0A0F0D] w-[450px] rounded-[28px] px-4 py-6 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              style={{ border: "2px solid #FFFFFF1A" }}
            >
              <div className="flex w-full flex-row items-center justify-between">
                <span className="font-[600] text-[28px] leading-[45px] text-[#E2E2E2] ">
                  Free Plan
                </span>
                <span
                  style={{
                    border: "1px solid #FFFFFF1A",
                    boxShadow: "0px 4px 16px 0px #2C2C2C40 inset",
                    backdropFilter: "blur(4px)",
                  }}
                  className="bg-[#FFFFFF1A] px-[20px] py-[6px] rounded-[32px] text-[#E2E2E2] font-[400] text-[16px] leading-[24px]"
                >
                  Your package
                </span>
              </div>
              <span className="font-[400] text-[18px] leading-[28px] text-[#9E9E9F]">
                Our starer plan with 3 free chat messages
              </span>
              <span className="font-[600] text-[45px] leading-[54px] text-[#E2E2E2]">
                $0
              </span>
              <button className="relative w-full h-[64px] rounded-[16px] bg-[#101613] text-[#E2E2E2] font-[600] text-[20px] leading-[32px]">
                <span>Get Started</span>
                <span
                  className="absolute inset-0 rounded-[16px] p-[2px]"
                  style={{
                    background:
                      "linear-gradient(95.62deg, #26B77D 0%, #00B0A7 109.69%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </button>
              <span className="font-[600] text-[20px] leading-[32px] text-[#E2E2E2] mt-4">
                Include feature
              </span>
              <div className="flex flex-col gap-4">
                <Benefits title="Multi-language support" />
                <Benefits title="Access to iOS and Android apps" />
                <Benefits title="Working with uploaded files" />
                <Benefits title="Better responses from the US-hosted DeepSeek-R1, GPT-4o, and Claude 3.5 Sonnet" />
                <Benefits title="Better responses from the US-hosted DeepSeek-R1, GPT-4o, and Claude 3.5 Sonnet" />
              </div>
            </div>
            {/* second column */}
            <div className="relative flex flex-col gap-4 bg-[#0A0F0D] w-[450px] rounded-[28px] pb-6 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
              <div className="bg-[linear-gradient(204.1deg,_#1CCD86_-10.47%,_rgba(42,_55,_58,_0.15)_56.56%)] w-full rounded-t-[28px] px-4 pt-6 gap-4 flex flex-col">
                {" "}
                <div className="flex w-full flex-row items-center justify-between">
                  <span className="font-[600] text-[28px] leading-[45px] text-[#E2E2E2] ">
                    Premium Plan
                  </span>
                  <span
                    style={{
                      border: "1px solid #FFFFFF1A",
                      boxShadow: "0px 4px 16px 0px #2C2C2C40 inset",
                      backdropFilter: "blur(4px)",
                    }}
                    className="bg-[#FFFFFF1A] px-[20px] py-[6px] rounded-[32px] text-[#E2E2E2] font-[400] text-[16px] leading-[24px]"
                  >
                    Most Popular
                  </span>
                </div>
                <span className="font-[400] text-[18px] leading-[28px] text-[#9E9E9F] m">
                  Our starer plan with 3 free chat messages
                </span>
                <span className="font-[600] text-[45px] leading-[54px] text-[#E2E2E2]">
                  $39.99
                </span>
                <button className="bg-[linear-gradient(95.62deg,_#26B77D_0%,_#00B0A7_109.69%)] w-full h-[64px] rounded-[16px]  text-[#E2E2E2] font-[600] text-[20px] leading-[32px]">
                  <span>Subscribe plan</span>
                </button>
              </div>
              <span className="font-[600] text-[20px] leading-[32px] text-[#E2E2E2] mt-4 px-4">
                Include feature
              </span>
              <div className="flex flex-col gap-4 px-4">
                <Benefits title="Multi-language support" />
                <Benefits title="Access to iOS and Android apps" />
                <Benefits title="Working with uploaded files" />
                <Benefits title="Better responses from the US-hosted DeepSeek-R1, GPT-4o, and Claude 3.5 Sonnet" />
                <Benefits title="Better responses from the US-hosted DeepSeek-R1, GPT-4o, and Claude 3.5 Sonnet" />
              </div>
              <span
                className="absolute inset-0 rounded-[28px] p-[2px]"
                style={{
                  background:
                    "linear-gradient(95.62deg, #26B77D 0%, #00B0A7 109.69%)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </div>
          </div>
        </div>
      </MainSection>
      <FifthContent>
        <div className="flex flex-col items-center justify-start mt-10">
          <AllInOneButton title="Testimonials" />
          <span className="font-[600] text-[34px] leading-[54px] text-[#FFFFFF] mt-10">
            User feedback
          </span>
          <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6 flex flex-row items-center justify-center gap-2">
            4.9 <Image src={images.icStar} alt="star" width={24} height={24} />{" "}
            based on 1.5k reviews
          </span>
          <div className="mt-20 mb-10">
            <Image
              src={images.IcLaurel}
              alt="laurel"
              width={344}
              height={100}
            />
          </div>
          <CommentGrid comments={feedback} />
          <div className="flex flex-row items-center justify-center my-10 gap-10">
            <button
              style={{
                background:
                  "linear-gradient(207.56deg, #2A9476 -29.94%, rgba(42, 55, 58, 0.15) 72.76%);",
              }}
              className=" rounded-[20px] p-[12px] flex flex-row gap-2 w-[344px] items-center justify-start"
            >
              <div>
                <Image
                  src={images.appstore}
                  alt="appstore"
                  width={56}
                  height={56}
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-[400] text-[18px] leading-[28px] text-[#9E9E9F]">
                  Download on the
                </span>
                <span className="font-[500] text-[26px] leading-[39px] text-[#FFFFFF]">
                  App Store
                </span>
              </div>
            </button>
            <button
              style={{
                background:
                  "linear-gradient(207.56deg, #2A9476 -29.94%, rgba(42, 55, 58, 0.15) 72.76%);",
              }}
              className=" rounded-[20px] p-[12px] flex flex-row gap-2 w-[344px] items-center justify-start"
            >
              <div>
                <Image
                  src={images.googleplay}
                  alt="appstore"
                  width={56}
                  height={56}
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-[400] text-[18px] leading-[28px] text-[#9E9E9F]">
                  Get it on
                </span>
                <span className="font-[500] text-[26px] leading-[39px] text-[#FFFFFF]">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>
      </FifthContent>
      <div className="flex flex-col items-center justify-center w-full rounded-[60px] pb-20 bg-transparent">
        <div className="w-[1120px] rounded-[60px]">
          <SubSection>
            <div className="flex flex-col items-center justify-center mt-20">
              <AllInOneButton title="Start your journey" />
              <span className="font-[600] text-[34px] leading-[54px] text-[#FFFFFF] mt-6">
                Unlock Your AI Power, Save More!
              </span>
              <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6 mb-10">
                Enter your email to get an exclusive voucher
              </span>
              <div className="flex flex-row gap-4">
                <input
                  placeholder="Enter your email"
                  className="bg-[#101613] p-4 rounded-[20px] w-[711px] h-[79px] text-[#FFFFFF] text-[20px] leading-[30px] font-[400] "
                  style={{ border: "2.5px solid #FFFFFF1A" }}
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  style={{ boxShadow: "0px 5.76px 23.04px 0px #00B29D40" }}
                  className="p-4 rounded-[20px] w-[234px] h-[79px] text-[#FFFFFF] flex items-center justify-center bg-[#10A469]"
                  onClick={handleGetVoucher}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleGetVoucher();
                    }
                  }}
                >
                  <span className="cursor-pointer font-[600] text-[28px] leading-[45px] text-[#FFFFFF]">
                    Get Voucher
                  </span>
                </button>
              </div>
              <div className="flex flex-row mt-6 items-center justify-start px-20 gap-2 w-full">
                <span className="font-[400] text-[20px] leading-[32px] text-[#E2E2E2]">
                  By submitting, you accept our
                </span>
                <span
                  className="font-[400] text-[20px] leading-[32px] text-[#10A469] cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://chat-ai-terms.begamob.com/terms-of-service",
                      "_blank"
                    );
                  }}
                >
                  Terms of Use and Privacy Policy.
                </span>
              </div>
            </div>
          </SubSection>
        </div>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
        duration={4000}
      />
    </div>
  );
};

export default Compared;

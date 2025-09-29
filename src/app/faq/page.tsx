"use client";
import React from "react";
import MainSection from "@/components/Organisms/BackGround/MainSection";
import AllInOneButton from "@/components/Atoms/Home/AllInOneButton";
import SubSection from "@/components/Organisms/BackGround/SubSection";
import FifthContent from "@/components/Organisms/BackGround/FifthContent";
import CommentGrid from "@/components/Atoms/Home/CommentGrid";
import { feedback } from "@/data/feedback";
import { faqData } from "@/data/faq";
import FAQList from "@/components/Atoms/FAQ/FAQList";
import Image from "next/image";
import { useThemeAssets } from "@/theme/useThemeAssets";

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

const Faq = () => {
  const { images } = useThemeAssets();
  return (
    <div>
      <MainSection>
        <div className="w-full flex justify-center items-center pb-20">
          <div
            className="w-[1120px] flex flex-col items-center justify-center pt-20 rounded-[44px]"
            style={{
              background:
                "linear-gradient(181.87deg, #101613 1.58%, #0A0F0D 113.86%)",
            }}
          >
            <AllInOneButton title="FAQ" />
            <span className="font-[600] text-[34px] leading-[54px] text-[#FFFFFF] mt-10">
              Have questions, We got answers
            </span>
            <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6">
              Let us know how we can assist
            </span>

            {/* FAQ Section */}
            <div className="mt-16 w-full px-6">
              <FAQList faqs={faqData} />
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
                />
                <button
                  style={{ boxShadow: "0px 5.76px 23.04px 0px #00B29D40" }}
                  className="p-4 rounded-[20px] w-[234px] h-[79px] text-[#FFFFFF] flex items-center justify-center bg-[#10A469]"
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
    </div>
  );
};

export default Faq;

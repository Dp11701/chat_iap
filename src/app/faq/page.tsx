"use client";
import React, { useState } from "react";
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

const Faq = () => {
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
        <div className="w-full flex justify-center items-center pb-20">
          <div
            className="w-[1120px] flex flex-col items-center justify-center pt-20 rounded-[44px]"
            style={{
              background:
                "linear-gradient(181.87deg, #101613 1.58%, #0A0F0D 113.86%)",
            }}
          >
            <AllInOneButton title="FAQ" />
            <span className="font-[600] sm:text-[34px] sm:leading-[54px] text-[20px] leading-[32px] text-[#FFFFFF] sm:mt-10 mt-6">
              Have questions, We got answers
            </span>
            <span className="font-[400] sm:text-[24px] sm:leading-[39px] text-[16px] leading-[24px] text-[#9E9E9F] sm:mt-6 mt-4 text-center sm:text-left">
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
          <span className="font-[600] text-[20px] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-10">
            User Feedback
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
          <div className="flex flex-row items-center justify-center w-[400px] p-6 bg-[#101613] rounded-[20px] mt-10">
            {" "}
            <span className="font-[600] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] text-[#FFFFFF] cursor-pointer">
              View More Review On
            </span>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-center my-10 gap-10">
            <button
              onClick={() =>
                window.open(
                  "https://apps.apple.com/ca/app/ai-chat-ai-assistant/id1669513811",
                  "_blank"
                )
              }
              style={{
                background:
                  "linear-gradient(207.56deg, #2A9476 -29.94%, rgba(42, 55, 58, 0.15) 72.76%);",
              }}
              className=" rounded-[20px] p-[12px] flex flex-row gap-2 w-[344px] items-center justify-start transition-transform duration-300 ease-in-out hover:scale-105"
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
              onClick={() =>
                window.open(
                  " https://play.google.com/store/apps/details?id=com.chat.chatai.chatbot.aichatbot&hl=en",
                  "_blank"
                )
              }
              style={{
                background:
                  "linear-gradient(207.56deg, #2A9476 -29.94%, rgba(42, 55, 58, 0.15) 72.76%);",
              }}
              className=" rounded-[20px] p-[12px] flex flex-row gap-2 w-[344px] items-center justify-start transition-transform duration-300 ease-in-out hover:scale-105"
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
      <div className="flex flex-col items-center justify-center w-full rounded-[60px] pb-20 bg-transparent sm:mt-20 mt-10">
        <div className="xl:w-[1120px] lg:w-[766px] sm:w-[600px] w-[374px] rounded-[60px]">
          <SubSection>
            <div className="flex flex-col items-center justify-center sm:mt-20 mt-5">
              <AllInOneButton title="Start Your Journey" />
              <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[20px] leading-[32px] text-[#FFFFFF] mt-6">
                Unlock Your AI Power, Save More!
              </span>
              <span className="font-[400] sm:text-[24px] sm:leading-[39px] text-[16px] leading-[24px] text-[#9E9E9F] mt-6 mb-10">
                Enter your email to get an exclusive voucher
              </span>
              <div className="flex sm:flex-row flex-col sm:gap-4 gap-2">
                <input
                  placeholder="Enter your email"
                  className="bg-[#101613] p-4 rounded-[20px] xl:w-[711px] md:w-[400px] sm:w-[300px] xl:h-[79px] sm:h-[70px] h-[59px] w-[300px] text-[#FFFFFF] text-[20px] leading-[30px] font-[400] "
                  style={{ border: "2.5px solid #FFFFFF1A" }}
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  style={{ boxShadow: "0px 5.76px 23.04px 0px #00B29D40" }}
                  className="p-4 rounded-[20px] xl:w-[234px] sm:w-[200px] w-[100px] xl:h-[79px] sm:h-[70px] h-[40px] text-[#FFFFFF] sm:flex hidden items-center justify-center bg-[#10A469]"
                  onClick={handleGetVoucher}
                >
                  <span className="cursor-pointer font-[600] xl:text-[28px] xl:leading-[45px] sm:text-[22px] sm:leading-[35px] text-[#FFFFFF]">
                    Get Voucher
                  </span>
                </button>
              </div>
              <div className="flex flex-row mt-6 items-center justify-start xl:px-20 sm:px-10 px-0 gap-1 sm:gap-2 w-full">
                <span className="font-[400] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] text-[14px] leading-[20px] text-[#E2E2E2]">
                  By submitting, you accept our
                </span>
                <span
                  className="font-[400] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] text-[14px] leading-[20px] text-[#10A469] cursor-pointer"
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
              <button
                style={{ boxShadow: "0px 5.76px 23.04px 0px #00B29D40" }}
                className="p-4 rounded-[20px]  w-[200px] h-[59px] text-[#FFFFFF] flex sm:hidden items-center justify-center bg-[#10A469] mt-4"
                onClick={handleGetVoucher}
              >
                <span className="cursor-pointer font-[600] xl:text-[28px] xl:leading-[45px] sm:text-[22px] sm:leading-[35px] text-[#FFFFFF]">
                  Get Voucher
                </span>
              </button>
            </div>
          </SubSection>
        </div>
      </div>

      {/* Toast Notification */}
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

export default Faq;

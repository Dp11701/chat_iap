"use client";

import SearchBar from "@/components/Atoms/InputText/SearchBar";
import Available from "@/components/Atoms/Home/Available";
import AllInOneButton from "@/components/Atoms/Home/AllInOneButton";
import MainSection from "@/components/Organisms/BackGround/MainSection";
import { useThemeAssets } from "@/theme/useThemeAssets";
import Image from "next/image";
import { motion } from "framer-motion";
import SecondContent from "@/components/Organisms/BackGround/SecondContent";
import ThirdContent from "@/components/Organisms/BackGround/ThirdContent";
import ActionCard from "@/components/Atoms/Card/ActionCard";
import FourthContent from "@/components/Organisms/BackGround/FourthContent";
import AnimatedUseCaseGrid from "@/components/Atoms/Home/AnimatedUseCaseGrid";
import AiTopics from "@/components/Molecules/Home/AiTopics";
import FifthContent from "@/components/Organisms/BackGround/FifthContent";
import CommentGrid from "@/components/Atoms/Home/CommentGrid";
import { feedback } from "@/data/feedback";
import SubSection from "@/components/Organisms/BackGround/SubSection";
import { useEffect, useRef, useState } from "react";
import Toast from "@/components/Atoms/Toast/Toast";
import UseCaseCard from "@/components/Atoms/Home/UseCaseCard";
import UseCaseCardStatic from "@/components/Atoms/Home/UseCaseCardStatic";

export default function Home() {
  const { images } = useThemeAssets();
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success" as "success" | "error" | "info",
  });
  const useCases = [
    { title: "Travel", image: images.icTravel },
    { title: "Education", image: images.icEducation },
    { title: "Writer", image: images.icWriter },
    { title: "Math", image: images.icMath },
    { title: "Language", image: images.icLanguage },
    { title: "Social Media", image: images.icSocialMedia },
    { title: "Design", image: images.icDesign },
    { title: "Voice", image: images.icVoice },
    { title: "Game", image: images.icGame },
    { title: "Essays", image: images.icEssays },
    { title: "Email", image: images.icEmail },
  ];

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

  const TypewriterText = ({
    phrases,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseTime = 1200,
    className,
    caretClassName,
  }: {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
    caretClassName?: string;
  }) => {
    const [displayText, setDisplayText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      const current = phrases[phraseIndex % phrases.length];
      const isComplete = !isDeleting && displayText === current;
      const isGone = isDeleting && displayText === "";

      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (isComplete) {
        timeout = pauseTime;
      }

      timerRef.current = setTimeout(() => {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }
        if (isGone) {
          setIsDeleting(false);
          setPhraseIndex((idx) => (idx + 1) % phrases.length);
          return;
        }

        const nextText = isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1);
        setDisplayText(nextText);
      }, timeout);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [
      displayText,
      isDeleting,
      phraseIndex,
      phrases,
      typingSpeed,
      deletingSpeed,
      pauseTime,
    ]);

    return (
      <span
        className={
          className ??
          "text-[24px] leading-[39px] xl:text-[60px] xl:leading-[96px] sm:text-[48px] sm:leading-[76px] font-[600] bg-gradient-to-r from-[#26B77D] to-[#00B0A7] bg-clip-text text-transparent mb-10"
        }
      >
        {displayText}
        <span
          className={
            caretClassName ?? "inline-block w-[2px] bg-white ml-1 animate-pulse"
          }
          style={{ height: "1em" }}
        />
      </span>
    );
  };

  return (
    <div className="h-full w-full h-min-screen">
      <MainSection>
        <div className="flex flex-col items-center justify-center xl:h-auto overflow-y-auto">
          <TypewriterText
            phrases={["Elevate your Productivity with"]}
            className="xl:text-[60px] xl:leading-[96px] sm:text-[48px] sm:leading-[76px] font-[600] text-[#FFFFFF] xl:mt-5 sm:mt-2 mt-2 text-[24px] leading-[39px]"
            caretClassName="inline-block w-[2px] bg-white ml-1 animate-pulse"
          />
          <span className="text-[24px] leading-[39px] xl:text-[64px] xl:leading-[96px] sm:text-[48px] sm:leading-[76px] font-[600] bg-gradient-to-r from-[#26B77D] to-[#00B0A7] bg-clip-text text-transparent mb-10">
            AI Chatbot
          </span>
          <SearchBar />
          <div className="w-full max-w-[1200px] flex flex-col mt-20 justify-center items-center">
            <span className="font-[600] xl:text-[28px] xl:leading-[45px] sm:text-[24px] sm:leading-[40px] text-[#E2E2E2]">
              Available On
            </span>
            <div className="flex flex-row gap-10 mt-6 sm:mt-10">
              <Available
                title="App Store"
                image={images.appstore}
                link="https://www.apple.com/app-store/"
              />
              <Available
                title="Google Play"
                image={images.googleplay}
                link="https://play.google.com/store/apps/details?id=com.google.android.apps.chrome"
              />
              <Available
                title="Chrome"
                image={images.chrome}
                link="https://www.google.com/chrome/"
              />
            </div>
          </div>
        </div>
      </MainSection>
      <SecondContent>
        <div className="flex flex-col items-center justify-start overflow-y-auto">
          <div className="mt-10 flex flex-col items-center justify-center">
            <AllInOneButton title="All In One" />
            <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-6">
              Elevate Your Productivity With Chat AI
            </span>
            <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6">
              What can Chat AI help you?
            </span>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <Image src={images.demo} alt="demo" width={1097} height={623} />
          </div>
        </div>
      </SecondContent>
      <ThirdContent>
        <div className="flex flex-col items-center justify-start xl:mt-20 mt-10">
          <AllInOneButton title="AI Tool Feature" />
          <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-6">
            Creative Your World With AI Tools
          </span>
          <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6">
            What can Chat AI help you?
          </span>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.0 }}
            >
              <ActionCard
                title="AI Tool Feature"
                image={images.card1}
                active_image={images.card1_active}
                description="What can Chat AI help you?"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <ActionCard
                title="AI Tool Feature"
                image={images.card2}
                active_image={images.card2_active}
                description="What can Chat AI help you?"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ActionCard
                title="AI Tool Feature"
                image={images.card3}
                active_image={images.card3_active}
                description="What can Chat AI help you?"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <ActionCard
                title="AI Tool Feature"
                image={images.card4}
                active_image={images.card4_active}
                description="What can Chat AI help you?"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <ActionCard
                title="AI Tool Feature"
                image={images.card5}
                active_image={images.card5_active}
                description="What can Chat AI help you?"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <ActionCard
                title="AI Tool Feature"
                image={images.card6}
                active_image={images.card6_active}
                description="What can Chat AI help you?"
              />
            </motion.div>
          </div>
        </div>
      </ThirdContent>
      <FourthContent>
        <div className="flex flex-col items-center justify-start mt-20">
          <AllInOneButton title="Usecases" />
          <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-6">
            AI Assistant - Best Friend With You Everywhere - Everytime
          </span>
          <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6">
            Discover what our app can help with
          </span>
          <div className="mt-20 mb-10">
            <AnimatedUseCaseGrid useCases={useCases} />
          </div>
          <AiTopics />
        </div>
      </FourthContent>
      <FifthContent>
        <div className="flex flex-col items-center justify-start mt-10">
          <AllInOneButton title="Testimonials" />
          <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-10">
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
              className=" rounded-[20px] p-[12px] flex flex-row gap-2 xl:w-[286px] sm:w-[262px] w-[262px] items-center justify-start transition-transform duration-300 ease-in-out hover:scale-105"
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
              className=" rounded-[20px] p-[12px] flex flex-row gap-2 xl:w-[286px] sm:w-[262px] w-[262px] items-center justify-start transition-transform duration-300 ease-in-out hover:scale-105"
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
              <AllInOneButton title="Start your journey" />
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
}

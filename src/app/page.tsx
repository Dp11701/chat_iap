"use client";

import SearchBar from "@/components/Atoms/InputText/SearchBar";
import Available from "@/components/Atoms/Home/Available";
import AllInOneButton from "@/components/Atoms/Home/AllInOneButton";
import { ThemeSwitch } from "@/components/Atoms/Toggle/ToggleTheme";
import MainSection from "@/components/Organisms/BackGround/MainSection";
import { useThemeAssets } from "@/theme/useThemeAssets";
import Image from "next/image";
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

export default function Home() {
  const { images } = useThemeAssets();

  return (
    <div className="h-full w-full h-min-screen">
      <MainSection>
        <div className="flex flex-col items-center justify-center h-[100vh] overflow-y-auto">
          <span className="xl:text-[60px] xl:leading-[96px] sm:text-[48px] sm:leading-[76px] font-[600] text-[#FFFFFF] xl:mt-10 sm:mt-2">
            Elevate your Productivity with
          </span>
          <span className="xl:text-[60px] xl:leading-[96px] sm:text-[48px] sm:leading-[76px] font-[600] bg-gradient-to-r from-[#26B77D] to-[#00B0A7] bg-clip-text text-transparent mb-10">
            AI Chatbot
          </span>
          <SearchBar />
          <div className="w-full max-w-[1200px] flex flex-col mt-20 justify-center items-center">
            <span className="font-[600] xl:text-[28px] xl:leading-[45px] sm:text-[24px] sm:leading-[40px] text-[#E2E2E2]">
              Available On
            </span>
            <div className="flex flex-row gap-10 mt-10">
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
              Elevate your Productivity with Chat AI
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
        <div className="flex flex-col items-center justify-start ">
          <AllInOneButton title="AI Tool Feature" />
          <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-6">
            Creative your world with AI tools
          </span>
          <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6">
            What can Chat AI help you?
          </span>
          <div className="mt-10 grid grid-cols-3 items-center justify-center gap-10">
            <ActionCard
              title="AI Tool Feature"
              image={images.card1}
              active_image={images.card1_active}
              description="What can Chat AI help you?"
            />
            <ActionCard
              title="AI Tool Feature"
              image={images.card2}
              active_image={images.card2_active}
              description="What can Chat AI help you?"
            />
            <ActionCard
              title="AI Tool Feature"
              image={images.card3}
              active_image={images.card3_active}
              description="What can Chat AI help you?"
            />
            <ActionCard
              title="AI Tool Feature"
              image={images.card4}
              active_image={images.card4_active}
              description="What can Chat AI help you?"
            />

            <ActionCard
              title="AI Tool Feature"
              image={images.card5}
              active_image={images.card5_active}
              description="What can Chat AI help you?"
            />

            <ActionCard
              title="AI Tool Feature"
              image={images.card6}
              active_image={images.card6_active}
              description="What can Chat AI help you?"
            />
          </div>
        </div>
      </ThirdContent>
      <FourthContent>
        <div className="flex flex-col items-center justify-start mt-20">
          <AllInOneButton title="Usecases" />
          <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-6">
            AI Assistant - best friend with you everywhere -everytime
          </span>
          <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6">
            Discover what our app can help with
          </span>
          <div className="mt-20 mb-10">
            <AnimatedUseCaseGrid
              useCases={[
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
              ]}
            />
          </div>
          <AiTopics />
        </div>
      </FourthContent>
      <FifthContent>
        <div className="flex flex-col items-center justify-start mt-10">
          <AllInOneButton title="Testimonials" />
          <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-10">
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
      <div className="flex flex-col items-center justify-center w-full rounded-[60px] pb-20 bg-transparent">
        <div className="xl:w-[1120px] lg:w-[766px] sm:w-[600px] w-[374px] rounded-[60px]">
          <SubSection>
            <div className="flex flex-col items-center justify-center mt-20">
              <AllInOneButton title="Start your journey" />
              <span className="font-[600] xl:text-[34px] xl:leading-[54px] sm:text-[28px] sm:leading-[45px] text-[#FFFFFF] mt-6">
                Unlock Your AI Power, Save More!
              </span>
              <span className="font-[400] text-[24px] leading-[39px] text-[#9E9E9F] mt-6 mb-10">
                Enter your email to get an exclusive voucher
              </span>
              <div className="flex flex-row gap-4">
                <input
                  placeholder="Enter your email"
                  className="bg-[#101613] p-4 rounded-[20px] xl:w-[711px] md:w-[400px] sm:w-[300px] xl:h-[79px] sm:h-[70px] h-[40px] text-[#FFFFFF] text-[20px] leading-[30px] font-[400] "
                  style={{ border: "2.5px solid #FFFFFF1A" }}
                />
                <button
                  style={{ boxShadow: "0px 5.76px 23.04px 0px #00B29D40" }}
                  className="p-4 rounded-[20px] xl:w-[234px] sm:w-[200px] w-[100px] xl:h-[79px] sm:h-[70px] h-[40px] text-[#FFFFFF] flex items-center justify-center bg-[#10A469]"
                >
                  <span className="cursor-pointer font-[600] xl:text-[28px] xl:leading-[45px] sm:text-[22px] sm:leading-[35px] text-[#FFFFFF]">
                    Get Voucher
                  </span>
                </button>
              </div>
              <div className="flex flex-row mt-6 items-center justify-start xl:px-20 sm:px-10 px-2 gap-2 w-full">
                <span className="font-[400] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] text-[#E2E2E2]">
                  By submitting, you accept our
                </span>
                <span
                  className="font-[400] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] text-[#10A469] cursor-pointer"
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
}

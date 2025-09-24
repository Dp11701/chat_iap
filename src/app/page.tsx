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

export default function Home() {
  const { images } = useThemeAssets();
  return (
    <div className="h-full w-full h-min-screen">
      <MainSection>
        <div className="flex flex-col items-center justify-center h-[100vh] overflow-y-auto">
          <span className="text-[60px] leading-[96px] font-[600] text-[#FFFFFF] mt-10">
            Elevate your Productivity with
          </span>
          <span className="text-[60px] leading-[96px] font-[600] bg-gradient-to-r from-[#26B77D] to-[#00B0A7] bg-clip-text text-transparent mb-10">
            AI Chatbot
          </span>
          <SearchBar />
          <div className="w-full max-w-[1200px] flex flex-col mt-20 justify-center items-center">
            <span className="font-[600] text-[28px] leading-[45px] text-[#E2E2E2]">
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
            <span className="font-[600] text-[34px] leading-[54px] text-[#FFFFFF] mt-6">
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
          <span className="font-[600] text-[34px] leading-[54px] text-[#FFFFFF] mt-6">
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
        <div className="flex flex-col items-center justify-start mt-10">
          <AllInOneButton title="Usecases" />
          <span className="font-[600] text-[34px] leading-[54px] text-[#FFFFFF] mt-6">
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
    </div>
  );
}

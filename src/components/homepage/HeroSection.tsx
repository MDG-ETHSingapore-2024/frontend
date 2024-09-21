import Globe from "../magicui/globe";
import Marquee from "../magicui/marquee";
import { AnimatedConnectButton } from "./AnimatedConnectButton";

const HeroSection = () => {
  const bandText = [
    "DECENTRALISED",
    "INFRASTRUCTURE",
    "FOR",
    "THE",
    "GREATER",
    "GOOD",
  ];
  return (
    <>
      <div className="h-full flex flex-col items-center relative pt-[7rem]">
        <div className="flex flex-col items-center gap-7">
          <span className="text-[#FDFDFD]/80 capitalize border-[1px] border-[#FDFDFD]/30 px-3 py-1 rounded-full">
            NOUNISH PRODUCT
          </span>
          <div className="flex flex-col w-full items-center text-6xl">
            <span className="text-white/70">WE ARE</span>
            <span>RUPABASE</span>
          </div>
          <h1>WHERE DATA MEETS DECENTRALISATION</h1>
          <AnimatedConnectButton />
        </div>
        <div className="relative flex h-full w-full overflow-hidden ">
          <Globe className="top-24 w-full" />
        </div>
      </div>
      <Marquee
        pauseOnHover
        className="[--duration:5s] w-full border-t-[1px] border-white/50 gap-0"
      >
        {bandText.map((text) => (
          <h1>{text}</h1>
        ))}
        <span className="text-[#FDFDFD]/40">⌐◨-◨</span>
      </Marquee>
    </>
  );
};

export default HeroSection;

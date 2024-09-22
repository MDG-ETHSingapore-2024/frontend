import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  DynamicEmbeddedAuthFlow,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { Navigate } from "react-router-dom";
import { useAccount } from "wagmi";
import confetti from "canvas-confetti";
import { useState } from "react";
import Navbar from "@/components/global/Navbar";
import Marquee from "@/components/magicui/marquee";
import Globe from "@/components/magicui/globe";

const Main = () => {
  const { address } = useAccount();
  const bandText = [
    "DECENTRALISED",
    "INFRASTRUCTURE",
    "FOR",
    "THE",
    "GREATER",
    "GOOD",
  ];
  if (address) return <Navigate to={"/dashboard"} />;
  return (
    <main>
      <section className="bg-[#CC0595] h-screen flex flex-col justify-between">
        <Navbar />
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
            <ConfettiEmoji />
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
      </section>
    </main>
  );
};

export function ConfettiEmoji() {
  const [isConnect, setIsConnect] = useState<boolean>(false);
  const handleClick = (e: any) => {
    e.stopPropagation();
    const scalar = 2;
    const noogles = ["⌐🎇-🎇", "⌐◨-◨", "⌐💀-💀", "⌐❍-❍", "⌐⍥-⍥"];
    const colors = ["red", "yellow", "red", "white", "blue"];
    const shapes = noogles.map((noggle, index) =>
      confetti.shapeFromText({
        text: noggle as string,
        scalar,
        color: colors[index],
      })
    );

    const defaults = {
      spread: 120,
      ticks: 200,
      gravity: 1,
      decay: 0.96,
      startVelocity: 30,
      shapes: shapes,
      scalar,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(() => {
      setIsConnect(true);
    }, 2000);
  };

  return (
    <div className="relative justify-center">
      <button
        onClick={handleClick}
        className="bg-white px-2 py-1 text-[#CC0595] rounded-md border-2 border-[#FF45CA]"
      >
        ⌐◨-◨ Connect wallet
      </button>
      {isConnect && (
        <div className="fixed inset-0 z-20 bg-[#232323] bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-lg  max-w-md w-full flex flex-col">
            <button
              onClick={() => setIsConnect(false)}
              className="border-[1px] border-slate-400 text-stone-800 mb-10 right-0 w-fit self-end p-2 mt-2 mr-2 rounded-lg"
            >
              Cancel
            </button>
            <DynamicEmbeddedAuthFlow />
            {/* <DynamicWidget /> */}
          </div>
        </div>
      )}
    </div>
  );
}
export default Main;

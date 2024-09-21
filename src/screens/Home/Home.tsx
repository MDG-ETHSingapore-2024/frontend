import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  DynamicEmbeddedAuthFlow,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { Navigate } from "react-router-dom";
import { useAccount } from "wagmi";
import confetti from "canvas-confetti";
import { useState } from "react";

const Main = () => {
  const { address } = useAccount();

  if (address) return <Navigate to={"/dashboard"} />;
  return (
    <BackgroundBeamsWithCollision className="min-h-screen w-full flex flex-col">
      {/* <ShineBorder
        className="relative flex h-screen overflow-y-scroll w-full flex-col items-center justify-center border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      > */}
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Where your data doesn’t just sit <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">it ascends to Web3.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">it ascends to Web3.</span>
          </div>
        </div>
      </h2>
      <ConfettiEmoji />
    </BackgroundBeamsWithCollision>
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
        className="bg-white text-black py-2 px-3 rounded-xl"
      >
        Connect
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
            <DynamicWidget />
          </div>
        </div>
      )}
    </div>
  );
}
export default Main;

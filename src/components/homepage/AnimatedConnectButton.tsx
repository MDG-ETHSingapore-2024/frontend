import { DynamicEmbeddedAuthFlow } from "@dynamic-labs/sdk-react-core";
import confetti from "canvas-confetti";
import { useState } from "react";

export const AnimatedConnectButton = () => {
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
        className="bg-white px-4 py-3 font-semibold text-[#CC0595] rounded-2xl border-2 border-[#FF45CA]"
      >
        ⌐◨-◨ &nbsp; Connect wallet
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
          </div>
        </div>
      )}
    </div>
  );
};

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Navigate, redirect } from "react-router-dom";
import { useAccount } from "wagmi";

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
      {/* </ShineBorder> */}
      <DynamicWidget />
    </BackgroundBeamsWithCollision>
  );
};

export default Main;

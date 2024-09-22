import { Navigate } from "react-router-dom";
import { useAccount } from "wagmi";
import Navbar from "@/components/global/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import ImpactSection from "@/components/homepage/ImpactSection";

const Main = () => {
  const { address } = useAccount();

  if (address) return <Navigate to={"/dashboard"} />;
  return (
    <main>
      <section className="bg-[#CC0595] h-screen flex flex-col justify-between">
        <Navbar />
        <HeroSection />
      </section>
      <ImpactSection />
    </main>
  );
};

export default Main;

import { FeaturesBento } from "./FeaturesBento";

const ImpactSection = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-around bg-[#161616]"
      id="impact"
    >
      <div className="flex flex-col w-full items-center text-4xl">
        <span className="text-white/70">OUR</span>
        <span>IMPACT</span>
      </div>
      <FeaturesBento />
    </section>
  );
};

export default ImpactSection;

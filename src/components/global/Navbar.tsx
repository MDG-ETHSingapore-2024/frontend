import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Navbar = () => {
  return (
    <div className="w-full p-2 text-xl flex justify-between items-center border-b-[1px] border-white">
      <span>Rupabase</span>
      <DynamicWidget />
    </div>
  );
};

export default Navbar;

import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import logo from "@/assets/logo.svg";
const Navbar = () => {
  return (
    <div className="w-full p-2 text-xl flex justify-between items-center border-b-[1px] border-white">
      <span>
        <img src={logo} alt="logo" />
      </span>
      <DynamicWidget />
    </div>
  );
};

export default Navbar;

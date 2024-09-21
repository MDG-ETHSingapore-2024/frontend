import {
  DynamicConnectButton,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import logo from "@/assets/logo.svg";
import { useAccount } from "wagmi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isConnected } = useAccount();

  return (
    <div className="w-full p-2 flex justify-between items-center">
      <div className="flex items-end gap-10 ">
        <span className="mr-10">
          <img src={logo} alt="logo" />
        </span>
        <Link to={"/"}>HOME</Link>
        <Link to={"/impact"}>IMPACT</Link>
        <Link to={"/about"}>ABOUT</Link>
      </div>
      {isConnected ? (
        <DynamicWidget />
      ) : (
        <DynamicConnectButton buttonClassName="bg-white px-2 py-1 text-[#CC0595] rounded-md border-2 border-[#FF45CA]">
          ⌐◨-◨ Connect wallet
        </DynamicConnectButton>
      )}
    </div>
  );
};

export default Navbar;

import "./global.css";
import { useAccount } from "wagmi";
import Main from "./screens/Main";

function App() {
  const { address } = useAccount();
  console.log(address);
  return <Main />;
}

export default App;

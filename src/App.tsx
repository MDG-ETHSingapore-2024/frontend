import { toast } from "sonner";
import "./global.css";
import { NeonGradientCard } from "./components/magicui/neon-gradient-card";
import { CardContainer } from "./components/ui/3d-card";
function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <CardContainer>
        <NeonGradientCard className="w-96 h-40 ">
          <h1 className="text-2xl">Let's get toasty 💋💋💋</h1>
          <button
            onClick={() => {
              toast.error("We fucked up !!!");
            }}
          >
            Toast me
          </button>
        </NeonGradientCard>
      </CardContainer>
    </div>
  );
}

export default App;

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { CardContainer } from "@/components/ui/3d-card";
import { increment } from "@/utils/redux/counter/counter.slice";
import { useAppDispatch, useAppSelector } from "@/utils/redux/store";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { toast } from "sonner";

const Main = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <CardContainer>
        <NeonGradientCard className="space-y-5">
          <h1 className="text-2xl">Let's get toasty 💋💋💋</h1>
          <div className="flex justify-between">
            <button
              onClick={() => {
                toast.error("We fucked up !!!");
              }}
              className="bg-orange-300 rounded-xl p-3 text-orange-800 hover:cursor-pointer hover:bg-orange-800 hover:text-orange-300"
            >
              Toast me
            </button>
            <button
              onClick={() => {
                dispatch(increment());
                toast.success("I'm getting more toasty");
              }}
              className=" bg-red-300 rounded-xl p-3 text-red-800 hover:cursor-pointer hover:bg-red-800 hover:text-red-300"
            >
              Toast Count ({count})
            </button>
          </div>
          <DynamicWidget />
        </NeonGradientCard>
      </CardContainer>
    </div>
  );
};

export default Main;

import { FaBackwardStep, FaPlay, FaForwardStep } from "react-icons/fa6";

export default function PlayAction() {
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]">
          <FaBackwardStep />
        </button>
        <button className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center">
          <FaPlay />
        </button>
        <button className="text-white text-[16px]">
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}

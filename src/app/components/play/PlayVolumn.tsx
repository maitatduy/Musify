import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolumn() {
  return (
    <>
      <div className="w-[184px] flex items-end">
        <button className="text-white text-[16px]">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="bg-primary w-[80%] h-[3px] rounded-[50px] absolute top-[14px] left-[0]"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={80}
            className="rounded-[50px] bg-[#FFFFFF1A] w-full h-[3px] appearance-none range-sm cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

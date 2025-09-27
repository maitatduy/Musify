import {
  FaBackwardStep,
  FaPlay,
  FaForwardStep,
  FaVolumeHigh,
} from "react-icons/fa6";

export default function Play() {
  return (
    <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full z-[999] py-[20px]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-[218px] flex items-center">
            <div className="w-[49px] aspect-square rounded-[14px] truncate">
              <img
                src="/demo/image-1.png"
                alt="Cô Phòng"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 ml-[12px]">
              <div className="text-white font-[700] text-[15px] mb-[2px]">
                Cô Phòng
              </div>
              <div className="text-[#FFFFFF70] font-[700] text-[12px]">
                Hồ Quang Hiếu, Huỳnh Văn
              </div>
            </div>
          </div>
          <div className="flex-1 mx-[67px]">
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
            <div className="mt-[11px] relative">
              <div className="bg-primary w-[80%] h-[4px] rounded-[50px] absolute top-[13px] left-[0]"></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={80}
                className="rounded-[50px] bg-[#FFFFFF0A] w-full h-[4px] appearance-none range-sm cursor-pointer"
              />
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}

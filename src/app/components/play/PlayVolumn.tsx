"use client";

import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolumn() {
  const handleChange = (event: any) => {
    const boxVolume: any = document.querySelector(".box-volume");
    const boxVolumnTotal: any = boxVolume.querySelector(".inner-total");
    const boxVolumCurrent: any = boxVolume.querySelector(".inner-current");

    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");

    elementAudio.volume = parseFloat(boxVolumnTotal.value) / 100;
    boxVolumCurrent.style.width = `${boxVolumnTotal.value}%`;
  };
  return (
    <>
      <div className="w-[184px] flex items-end box-volume">
        <button className="text-white text-[16px]">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="bg-primary w-[80%] h-[3px] rounded-[50px] absolute top-[14px] left-[0] inner-current"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={80}
            className="rounded-[50px] bg-[#FFFFFF1A] w-full h-[3px] appearance-none range-sm cursor-pointer inner-total"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

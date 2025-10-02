"use client";

import {
  FaBackwardStep,
  FaPlay,
  FaForwardStep,
  FaPause,
} from "react-icons/fa6";

export default function PlayAction() {
  const handlePlay = (event: any) => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    const boxButtonPlay = event.currentTarget;
    if (boxButtonPlay.classList.contains("play")) {
      boxButtonPlay.classList.remove("play");
      elementAudio.pause();
    } else {
      boxButtonPlay.classList.add("play");
      elementAudio.play();
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]">
          <FaBackwardStep />
        </button>
        <button
          onClick={handlePlay}
          className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center box-button-play play"
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>
        <button className="text-white text-[16px]">
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}

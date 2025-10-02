"use client";

import { getSingers } from "@/app/helpers/getSingers";
import { getSongsDetail } from "@/app/helpers/getSongs";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: ISongItem) {
  const { id = "", image = "", title = "", audio = "", className = "" } = props;

  const handlePlay = async () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");

    if (!elementPlayAudio) return;

    const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");
    const elementSource: any = elementAudio?.querySelector(".inner-source");

    if (!elementAudio || !elementSource) return;

    // Cập nhật src
    elementSource.src = audio;

    // Gắn listener trước khi load/play
    const boxPlayTime: any = document.querySelector(".box-play-time");
    const boxPlayTimeTotal: any =
      boxPlayTime?.querySelector(".inner-total") || null;
    const boxPlayTimeCurrent: any =
      boxPlayTime?.querySelector(".inner-current") || null;

    elementAudio.addEventListener("loadedmetadata", () => {
      if (boxPlayTimeTotal) {
        boxPlayTimeTotal.max = elementAudio.duration.toString();
      }
    });

    elementAudio.addEventListener("timeupdate", () => {
      if (!boxPlayTimeTotal || !boxPlayTimeCurrent) return;

      const currentTime = elementAudio.currentTime;
      const totalTime = elementAudio.duration;
      boxPlayTimeTotal.value = currentTime.toString();
      const percent = (currentTime / totalTime) * 100;
      boxPlayTimeCurrent.style.width = `${percent}%`;
    });

    // Load + play
    elementAudio.load();
    elementAudio.play();

    // Hiển thị khối Play
    elementPlayAudio.classList.remove("hidden");

    // Hiển thị ảnh
    const elementImage: HTMLImageElement | null =
      document.querySelector(".inner-image");
    if (elementImage) {
      elementImage.src = image;
      elementImage.alt = title;
    }

    // Hiển thị tiêu đề
    const elementTitle: HTMLElement | null =
      document.querySelector(".inner-title");
    if (elementTitle) {
      elementTitle.innerHTML = title;
    }

    // Hiển thị tên ca sĩ
    const songDetail: any = await getSongsDetail(id);
    let singersList: any[] = await getSingers();
    const singersId: any[] = songDetail.singerId;
    const filteredSingers = singersList.filter((item) =>
      singersId.includes(item.id)
    );
    const singerName = filteredSingers.map((item) => item.title).join(", ");
    const elementSinger: HTMLElement | null =
      document.querySelector(".inner-singer");
    if (elementSinger) {
      elementSinger.innerHTML = singerName;
    }

    // Thêm class play cho box button play
    const boxButtonPlay: HTMLElement | null =
      document.querySelector(".box-button-play");
    if (boxButtonPlay) {
      boxButtonPlay.classList.add("play");
    }
  };

  return (
    <button onClick={handlePlay} className={className}>
      <FaPlay />
    </button>
  );
}

"use client";

import { getSingers } from "@/app/helpers/getSingers";
import { getSongsDetail } from "@/app/helpers/getSongs";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: ISongItem) {
  const {
    id = "",
    image = "",
    title = "",
    singer = "",
    listen = 0,
    audio = "",
  } = props;
  const handlePlay = async () => {
    // Phát nhạc
    const elementPlayAudio: any = document.querySelector(".play-audio");
    if (elementPlayAudio) {
      const elementAudio = elementPlayAudio.querySelector(".inner-audio");
      const elementSource = elementAudio.querySelector(".inner-source");
      elementSource.src = audio;
      elementAudio.load();
      elementAudio.play();

      // Hiển thị khối Play
      elementPlayAudio.classList.remove("hidden");

      // Hiển thị ảnh
      const elementImage: any = document.querySelector(".inner-image");
      if (elementImage) {
        elementImage.src = image;
        elementImage.alt = title;
      }

      // Hiển thị tiêu đề
      const elementTitle: any = document.querySelector(".inner-title");
      if (elementTitle) {
        elementTitle.innerHTML = title;
      }

      // Hiển thị tên ca sĩ
      // Lấy ra thông tin chi tiết bài hát
      const songDetail: any = await getSongsDetail(id);
      // Lấy ra danh sách ca sĩ
      let singersList: any[] = await getSingers();
      // Lấy ra id của các ca sĩ
      const singersId: any[] = songDetail.singerId;
      // Lọc ra danh sách ca sĩ theo id
      const filteredSingers = singersList.filter((item) =>
        singersId.includes(item.id)
      );
      // Lấy tên ca sĩ và nối bằng dấu ", "
      const singerName = filteredSingers.map((item) => item.title).join(", ");
      const elementSinger: any = document.querySelector(".inner-singer");
      if (elementSinger) {
        elementSinger.innerHTML = singerName;
      }

      // Thêm class play cho box button play
      const boxButtonPlay = document.querySelector(".box-button-play");
      if (boxButtonPlay) {
        boxButtonPlay.classList.add("play");
      }

      // Lấy ra tổng thời gian của một bài hát
      const boxPlayTime: any = document.querySelector(".box-play-time");
      const boxPlayTimeTotal: any = boxPlayTime?.querySelector(".inner-total");
      const boxPlayTimeCurrent: any =
        boxPlayTime?.querySelector(".inner-current");

      elementAudio.onloadedmetadata = () => {
        const totalTime = elementAudio.duration;
        boxPlayTimeTotal.max = totalTime;

        // Lấy ra tổng thời gian hiện tại
        elementAudio.ontimeupdate = () => {
          const currentTime = elementAudio.currentTime;
          boxPlayTimeTotal.value = currentTime;
          const percent = (currentTime * 100) / totalTime;
          boxPlayTimeCurrent.style.width = `${percent}%`;
        };
      };
    }
  };
  return (
    <>
      <button
        onClick={handlePlay}
        className="w-[34px] h-[34px] text-white border border-white rounded-full inline-flex items-center justify-center text-[15px]"
      >
        <FaPlay />
      </button>
    </>
  );
}

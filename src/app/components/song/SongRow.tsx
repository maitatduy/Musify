import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default function SongRow(props: ISongItem) {
  const { image = "", title = "", singer = "", time = "" } = props;

  return (
    <>
      <div className="bg-[#212121] flex items-center justify-between py-[10px] px-[18px] rounded-[15px]">
        <div className="w-[40%] flex items-center">
          <button className="text-white text-[24px]">
            <FaPlay />
          </button>
          <div className="mx-[12px] w-[42px] aspect-square rounded-[8px] truncate">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] text-white">{title}</div>
        </div>

        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-white">{singer}</div>
        </div>

        <div className="w-[30%] flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {time}
          </div>
          <button className="text-[20px] text-white">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
  );
}

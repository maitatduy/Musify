import { ISongItem } from "@/app/interfaces/ISongItem";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";

export default function SongItem(props: ISongItem) {
  const {
    id = "",
    image = "",
    title = "",
    singer = "",
    listen = 0,
    audio = "",
  } = props;
  return (
    <>
      <div className="rounded-[15px] bg-[#212121] p-[10px] flex items-center" song-id={id}>
        <div className="w-[76px] h-[76px] aspect-square rounded-[10px] overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
        <div className="flex-1 ml-[10px]">
          <div>
            <Link
              className="text-[16px] text-white font-semibold mb-[5px]"
              href={`/song/${id}`}
            >
              {title}
            </Link>
          </div>
          <div className="text-xs text-[#ffffff80] font-normal mb-2">
            {singer}
          </div>
          <div className="text-[12px] font-normal text-white">
            {listen.toLocaleString()} lượt nghe
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <ButtonPlay
            {...props}
            className="w-[34px] h-[34px] text-white border border-white rounded-full inline-flex items-center justify-center text-[15px]"
          />
          <button className="w-[34px] h-[34px] text-white border border-white rounded-full inline-flex items-center justify-center text-[15px]">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
}

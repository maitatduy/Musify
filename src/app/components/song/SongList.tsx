import { ISongItem } from "@/app/interfaces/ISongItem";
import SongItem from "./SongItem";

export default function SongList(props: { data: ISongItem[] }) {
  const { data } = props;
  return (
    <>
      <div className="flex flex-col gap-[12px]" song-list="">
        {data.map((item, index) => (
          <SongItem
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            singer={item.singer}
            listen={item.listen}
            audio={item.audio}
            wishlist={item.wishlist}
          />
        ))}
      </div>
    </>
  );
}

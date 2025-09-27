import { ISongItem } from "@/app/interfaces/ISongItem";
import SongItem from "./SongItem";

export default function SongList(props: { data: ISongItem[] }) {
  const { data } = props;
  return (
    <>
      <div className="flex flex-col gap-[12px]">
        {data.map((item, index) => (
          <SongItem
            key={index}
            image={item.image}
            title={item.title}
            singer={item.singer}
            listen={item.listen}
          />
        ))}
      </div>
    </>
  );
}

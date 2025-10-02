import { ISongItem } from "@/app/interfaces/ISongItem";
import SongRow from "./SongRow";

export default function SongTable(props: { data: ISongItem[] }) {
  const { data } = props;

  return (
    <>
      <div className="grid grid-cols-1 gap-[10px]">
        {data.map((item, index) => (
          <SongRow
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            singer={item.singer}
            time={item.time}
            audio={item.audio}
          />
        ))}
      </div>
    </>
  );
}

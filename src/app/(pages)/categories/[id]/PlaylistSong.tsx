import SongTable from "@/app/components/song/SongTable";
import Title from "@/app/components/title/Title";
import { getSongsList } from "@/app/helpers/getSongs";

export default async function PlaylistSong(props: { id: string }) {
  const { id } = props;
  const data: any[] = await getSongsList(undefined, id);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát" />
        <SongTable data={data} />
      </div>
    </>
  );
}

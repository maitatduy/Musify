import SongTable from "@/app/components/song/SongTable";
import Title from "@/app/components/title/Title";
import { getSongsList } from "@/app/helpers/getSongs";

export default async function SongsBySinger(props: { singerId: string }) {
  const { singerId } = props;
  const data: any[] = await getSongsList();
  const dataFilter = data.filter((item: any) =>
    item.singerId.includes(singerId)
  );
  return (
    <>
      <Title text={"Danh sách bài hát"} />
      <SongTable data={dataFilter} />
    </>
  );
}

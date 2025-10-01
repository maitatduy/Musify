import SongTable from "@/app/components/song/SongTable";
import Title from "@/app/components/title/Title";
import { getSongsList } from "@/app/helpers/getSongs";

export default async function RelatedSongs(props: { categoryId: string }) {
  const { categoryId } = props;
  const data: any[] = await getSongsList(undefined, categoryId);
  return (
    <>
      <Title text={"Bài Hát Cùng Danh Mục"} />
      <SongTable data={data} />
    </>
  );
}

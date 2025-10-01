import CardInfo from "@/app/components/card/CardInfo";
import PlaylistSong from "./PlaylistSong";
import { getDataCategoryDetail } from "@/app/helpers/getCategories";

export default async function SongsByCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const data: any = await getDataCategoryDetail(params.id);
  return (
    <>
      <CardInfo
        image={data.image}
        title={data.title}
        description={data.description}
      />

      <PlaylistSong id={params.id} />
    </>
  );
}

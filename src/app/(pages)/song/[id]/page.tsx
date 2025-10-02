import CardInfo from "@/app/components/card/CardInfo";
import LyricsBox from "./LyricsBox";
import RelatedSongs from "./RelatedSongs";
import { getSongsDetail } from "@/app/helpers/getSongs";
import { notFound } from "next/navigation";
import { getSingers } from "@/app/helpers/getSingers";

export default async function SongDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data: any = await getSongsDetail(params.id);
  if (!data) {
    notFound();
  }
  const songDetail: any = await getSongsDetail(params.id);
  let singersList: any[] = await getSingers();
  const singersId: any[] = songDetail.singerId;
  const filteredSingers = singersList.filter((item) =>
    singersId.includes(item.id)
  );
  const singerName = filteredSingers.map((item) => item.title).join(", ");
  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={data.image}
        title={data.title}
        description={singerName}
      />
      {/* Lời bài hát */}
      <LyricsBox lyric={data.lyric} />

      {/* Bài hát cùng danh mục */}
      <RelatedSongs categoryId={data.categoryId} />
    </>
  );
}

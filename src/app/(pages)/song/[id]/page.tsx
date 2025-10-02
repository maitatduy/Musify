import CardInfo from "@/app/components/card/CardInfo";
import LyricsBox from "./LyricsBox";
import RelatedSongs from "./RelatedSongs";
import { getSongsDetail } from "@/app/helpers/getSongs";
import { notFound } from "next/navigation";
import { getSingers } from "@/app/helpers/getSingers";

export default async function SongDetailPage({ params }: any) {
  const data = await getSongsDetail(params.id);

  if (!data) {
    notFound();
  }

  const singersList = await getSingers();
  const singersId: string[] = data.singerId;
  const filteredSingers = singersList.filter((item) =>
    singersId.includes(item.id)
  );
  const singerName = filteredSingers.map((item) => item.title).join(", ");

  return (
    <>
      <CardInfo
        image={data.image}
        title={data.title}
        description={singerName}
      />
      <LyricsBox lyric={data.lyric} />
      <RelatedSongs categoryId={data.categoryId} />
    </>
  );
}

import CardInfo from "@/app/components/card/CardInfo";
import LyricsBox from "./LyricsBox";
import RelatedSongs from "./RelatedSongs";
import { getSongsDetail } from "@/app/helpers/getSongs";
import { notFound } from "next/navigation";

export default async function SongDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data: any = await getSongsDetail(params.id);
  if (!data) {
    notFound();
  }
  return (
    <>
      {/* CardInfo */}
      <CardInfo image={data.image} title={data.title} description={""} />
      {/* Lời bài hát */}
      <LyricsBox lyric={data.lyric} />

      {/* Bài hát cùng danh mục */}
      <RelatedSongs categoryId={data.categoryId} />
    </>
  );
}

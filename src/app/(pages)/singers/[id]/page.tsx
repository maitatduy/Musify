import CardInfo from "@/app/components/card/CardInfo";
import SongsBySinger from "./SongsBySinger";
import { getSingerDetail } from "@/app/helpers/getSingers";

export default async function SingerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data: any = await getSingerDetail(params.id);
  return (
    <>
      <CardInfo
        image={data.image}
        title={data.title}
        description={data.description}
      />
      <SongsBySinger singerId={data.id} />
    </>
  );
}

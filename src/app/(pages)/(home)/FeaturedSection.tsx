import Banner from "@/app/components/banner/Banner";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { getSongsList } from "@/app/helpers/getSongs";

export default async function FeaturedSection() {
  const dataSongList: any[] = await getSongsList(3);

  return (
    <>
      <div className="flex items-center">
        <Banner />
        <div className="flex-1 ml-5">
          <Title text="Nghe Nhiều" />
          <SongList data={dataSongList} />
        </div>
      </div>
    </>
  );
}

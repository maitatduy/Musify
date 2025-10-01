import Banner from "@/app/components/banner/Banner";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { database } from "@/app/firebaseConfig";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { onValue, ref } from "firebase/database";

const getDataSongList = async () => {
  const songRef = ref(database, "songs");

  const result: any[] = await new Promise((resolve) => {
    onValue(songRef, (snapshot) => {
      const data: any = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childValue = childSnapshot.val();
        data.push({
          id: childKey,
          ...childValue,
        });
      });
      resolve(data.slice(1, 4));
    });
  });
  return result;
};

export default async function FeaturedSection() {
  const dataSongList: ISongItem[] = await getDataSongList();

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

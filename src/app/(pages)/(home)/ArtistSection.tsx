import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { database } from "@/app/firebaseConfig";
import { ICardItem } from "@/app/interfaces/ICardItem";
import { ref, onValue } from "firebase/database";

const getDataSingers = async () => {
  const singerRef = ref(database, "singers");

  const result: any[] = await new Promise((resolve) => {
    onValue(singerRef, (snapshot) => {
      const data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childValue = childSnapshot.val();
        data.push({
          id: childKey,
          link: `/singers/${childKey}`,
          ...childValue,
        });
      });
      resolve(data.slice(0, 5));
    });
  });
  return result;
};

export default async function ArtistSection() {
  const dataSingers: any[] = await getDataSingers();

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật" />
        <CardList data={dataSingers} />
      </div>
    </>
  );
}

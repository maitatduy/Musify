import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { getSingers } from "@/app/helpers/getSingers";
import { ICardItem } from "@/app/interfaces/ICardItem";

export default async function ArtistSection() {
  const dataSingers: ICardItem[] = await getSingers();
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật" />
        <CardList data={dataSingers} />
      </div>
    </>
  );
}

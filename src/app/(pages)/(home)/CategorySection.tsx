import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { getDataCategories } from "@/app/helpers/getCategories";

export default async function CategorySection() {
  const dataCategories: any[] = await getDataCategories(5);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Nổi Bật" />
        <CardList data={dataCategories} />
      </div>
    </>
  );
}

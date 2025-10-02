import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { getDataCategories } from "@/app/helpers/getCategories";

export default async function CategoriesPage() {
  const dataCategories: any[] = await getDataCategories();

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" />
        <CardList data={dataCategories} />
      </div>
    </>
  );
}

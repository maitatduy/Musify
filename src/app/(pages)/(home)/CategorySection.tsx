import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { ICardItem } from "@/app/interfaces/ICardItem";

export default function CategorySection() {
  const dataCategories: ICardItem[] = [
    {
      image: "/demo/image-6.png",
      title: "Nhạc Trẻ",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/image-7.png",
      title: "Pop Âu Mỹ",
      description:
        "Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ",
      link: "",
    },
    {
      image: "/demo/image-8.png",
      title: "Nhạc EDM",
      description:
        "Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ",
      link: "",
    },
    {
      image: "/demo/image-9.png",
      title: "Nhạc Trữ Tình",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/image-10.png",
      title: "Nhạc Hàn Quốc",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
  ];

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Nổi Bật" />
        <CardList data={dataCategories} />
      </div>
    </>
  );
}

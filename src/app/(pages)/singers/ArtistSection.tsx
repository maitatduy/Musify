import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { ICardItem } from "@/app/interfaces/ICardItem";

export default function ArtistSection() {
  const dataSingers: ICardItem[] = [
    {
      image: "/demo/image-11.png",
      title: "Sơn Tùng M-TP",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-12.png",
      title: "Nal",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-13.png",
      title: "Tuấn Hưng",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-14.png",
      title: "Jimmy Nguyễn",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-15.png",
      title: "BigDaddy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-11.png",
      title: "Sơn Tùng M-TP",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-12.png",
      title: "Nal",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-13.png",
      title: "Tuấn Hưng",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-14.png",
      title: "Jimmy Nguyễn",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      image: "/demo/image-15.png",
      title: "BigDaddy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
  ];

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật" />
        <CardList data={dataSingers} />
      </div>
    </>
  );
}

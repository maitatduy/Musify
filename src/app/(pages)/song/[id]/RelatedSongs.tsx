import SongTable from "@/app/components/song/SongTable";
import Title from "@/app/components/title/Title";
import { ISongItem } from "@/app/interfaces/ISongItem";

export default function RelatedSongs() {
  const data: ISongItem[] = [
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
  ];

  return (
    <>
      <Title text={"Bài Hát Cùng Danh Mục"} />
      <SongTable data={data} />
    </>
  );
}

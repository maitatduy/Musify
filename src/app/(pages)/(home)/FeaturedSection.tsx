import Banner from "@/app/components/banner/Banner";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { ISongItem } from "@/app/interfaces/ISongItem";

export default function FeaturedSection() {
  const dataSongList: ISongItem[] = [
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      listen: 24500,
    },
    {
      image: "/demo/image-4.png",
      title: "Hoa Nở Bên Đường",
      singer: "Quang Đăng Trần, ACV",
      listen: 20500,
    },
    {
      image: "/demo/image-5.png",
      title: "Hứa Đợi Nhưng Chẳng Tới",
      singer: "Lâm Tuấn, Vương Thiên Tuấn",
      listen: 18200,
    },
  ];
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

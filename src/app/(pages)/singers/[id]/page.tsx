import CardInfo from "@/app/components/card/CardInfo";
import SongsBySinger from "./SongsBySinger";

export default function SingerDetailPage() {
  return (
    <>
      <CardInfo
        image={"/demo/image-11.png"}
        title={"Sơn Tùng M-TP"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <SongsBySinger />
    </>
  );
}

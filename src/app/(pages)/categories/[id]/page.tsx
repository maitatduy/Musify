import CardInfo from "@/app/components/card/CardInfo";
import PlaylistSong from "./PlaylistSong";

export default function SongsByCategoryPage() {
  return (
    <>
      <CardInfo
        image="/demo/image-6.png"
        title="Nhạc Trẻ"
        description="Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục."
      />

      <PlaylistSong />
    </>
  );
}

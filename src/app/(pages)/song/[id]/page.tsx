import CardInfo from "@/app/components/card/CardInfo";
import LyricsBox from "./LyricsBox";
import RelatedSongs from "./RelatedSongs";

export default function SongDetailPage() {
  const lyric = `Verse:
    Níu ngàn lời cũng không ngăn được
    Bàn chân bước đi không báo trước
    Có những điều cất riêng trong lòng
    Giờ bốn vách ngăn cùng cô phòng
    Trốn chạy rồi hàn huyên với men
    Cứ thế kết thân cùng ánh đèn
    Lối mòn ngày nào trên phố quen
    Vẫn đó dáng hình ngày người đến
    Pre:
    Rời xa, lòng đau, chết trong cơn u sầu
    Liệu rằng tình đời ai sẽ thấu
    Dĩ vãng xưa vẫn in sâu trong đầu
    (hah a hah)
    Chorus:
    Thời gian không thể xoá nhoà đôi ta
    Có chăng chỉ là mờ phai đi theo tháng năm
    Rồi khi tỉnh giấc mới chợt nhận ra
    Thật quá khó để quên đi một người
    Màn đêm u tối bao trùm không gian
    Nói thay tiếng lòng này từ lâu đã vỡ tan
    Thì ra duyên kiếp để mình gặp nhau
    Dạy nhau tốt hơn xong dành lại cho người sau…
  `;
  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={"/demo/image-16.png"}
        title={"Cô Phòng"}
        description={"Hồ Quang Hiếu, Huỳnh Văn"}
      />
      {/* Lời bài hát */}
      <LyricsBox lyric={lyric} />

      {/* Bài hát cùng danh mục */}
      <RelatedSongs />
    </>
  );
}

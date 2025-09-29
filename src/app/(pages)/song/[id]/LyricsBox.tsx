import Title from "@/app/components/title/Title";

export default function LyricsBox(props: { lyric: string }) {
  const { lyric } = props;
  return (
    <>
      <div className="mt-[30px] mb-5">
        <Title text={"Lời bài hát"} />
        <div className="bg-[#212121] rounded-[15px] p-5 text-white text-[14px] font-medium whitespace-pre-line">
          {lyric}
        </div>
      </div>
    </>
  );
}

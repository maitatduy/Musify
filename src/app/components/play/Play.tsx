import PlayAudio from "./PlayAudio";
import PlayInfo from "./PlayInfo";
import PlayAction from "./PlayAction";
import PlayTime from "./PlayTime";
import PlayVolumn from "./PlayVolumn";

export default function Play() {
  return (
    <>
      <div className="bg-[#212121] hidden border-t border-[#494949] fixed bottom-0 left-0 w-full z-[999] py-[20px] play-audio">
        <PlayAudio />
        <div className="container mx-auto flex items-center justify-between">
          <PlayInfo />
          <div className="flex-1 mx-[67px]">
            <PlayAction />
            <PlayTime />
          </div>
          <PlayVolumn />
        </div>
      </div>
    </>
  );
}

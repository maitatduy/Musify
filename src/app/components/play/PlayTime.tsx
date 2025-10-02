export default function PlayTime() {
  return (
    <>
      <div className="mt-[11px] relative">
        <div className="bg-primary w-[80%] h-[4px] rounded-[50px] absolute top-[13px] left-[0]"></div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={80}
          className="rounded-[50px] bg-[#FFFFFF0A] w-full h-[4px] appearance-none range-sm cursor-pointer"
        />
      </div>
    </>
  );
}

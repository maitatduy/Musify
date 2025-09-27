export default function Banner() {
  return (
    <>
      <div className="w-[534px]">
        <div
          className="bg-cover w-full rounded-[15px] flex items-center"
          style={{ backgroundImage: "url('/demo/background-1.png')" }}
        >
          <div className="flex-1 mr-[34px] ml-[30px]">
            <div className="font-bold text-[32px] mb-[6px] text-white">
              Nhạc EDM
            </div>
            <div className="font-medium text-[14px] text-white">
              Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
              nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
            </div>
          </div>
          <div className="w-[216px] mt-[46px] mr-[33px]">
            <img
              className="w-full h-auto"
              src="/demo/image-2.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

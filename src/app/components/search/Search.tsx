import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  return (
    <>
      <form className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center">
        <input
          type="text"
          name="keyword"
          placeholder="Tìm kiếm..."
          className="order-2 flex-1 outline-none bg-transparent text-white text-[16px] font-[600]"
        />
        <button
          type="submit"
          className="text-white order-1 text-[22px] mr-[20px]"
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
}

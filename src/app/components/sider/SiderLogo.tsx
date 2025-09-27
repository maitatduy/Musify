import Link from "next/link";

export default function SiderLogo() {
  return (
    <>
      <div className={"bg-[#1C1C1C] py-[25px] pl-5"}>
        <Link className={"flex gap-5 items-center"} href={"/"}>
          <img
            className={"h-[42px] w-auto"}
            src={"/logo.png"}
            alt={"Musify Logo"}
          />
          <span className={"text-[#00ADEF] text-2xl font-bold"}>Musify</span>
        </Link>
      </div>
    </>
  );
}

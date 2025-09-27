import SiderLogo from "./SiderLogo";
import SiderMenu from "./SiderMenu";

export default function Sider() {
  return (
    <>
      <div className={"bg-[#212121] w-[280px] h-[100vh] fixed"}>
        <SiderLogo />
        <SiderMenu />
      </div>
    </>
  );
}

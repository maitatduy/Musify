import { IMenuLink } from "@/app/interfaces/IMenuLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiderMenuItem(props: {
  item: IMenuLink;
  isShow: boolean;
}) {
  const pathName = usePathname();
  const { item, isShow = false } = props;
  return (
    <>
      {isShow && (
        <li>
          <Link
            href={item.link}
            className={`flex gap-5 items-center hover:text-primary ${
              item.link === pathName ? "text-primary" : "text-white"
            }`}
          >
            <span className="text-[22px]">{item.icon}</span>
            <span className="text-[16px] font-bold capitalize leading-[22px]">
              {item.title}
            </span>
          </Link>
        </li>
      )}
    </>
  );
}

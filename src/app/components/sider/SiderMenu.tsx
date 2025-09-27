"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  FaHeart,
  FaHouse,
  FaMusic,
  FaPodcast,
  FaRightFromBracket,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";

export default function SiderMenu() {
  interface MenuLink {
    icon: ReactNode;
    title: String;
    link: Url;
  }

  const menu: MenuLink[] = [
    {
      icon: <FaHouse />,
      title: "Trang Chủ",
      link: "/",
    },
    {
      icon: <FaMusic />,
      title: "Danh mục bài hát",
      link: "/categories",
    },
    {
      icon: <FaPodcast />,
      title: "Ca sĩ",
      link: "/singers",
    },
    {
      icon: <FaHeart />,
      title: "Bài hát yêu thích",
      link: "/wishlist",
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng xuất",
      link: "/logout",
    },
    {
      icon: <FaUser />,
      title: "Đăng nhập",
      link: "/login",
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng ký",
      link: "/register",
    },
  ];

  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <nav className={"px-5 pt-[30px]"}>
        <ul className="flex flex-col items-start gap-[30px]">
          {menu.map((item, index) => (
            <li key={index}>
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
          ))}
        </ul>
      </nav>
    </>
  );
}

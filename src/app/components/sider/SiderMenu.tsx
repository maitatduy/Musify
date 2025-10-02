"use client";
import { authFirebase } from "@/app/firebaseConfig";
import { IMenuLink } from "@/app/interfaces/IMenuLink";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaHeart,
  FaHouse,
  FaMusic,
  FaPodcast,
  FaRightFromBracket,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {
  const [isLogin, setIsLogin] = useState<boolean>();
  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  });

  const menu: IMenuLink[] = [
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
      logged: true,
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng xuất",
      link: "/logout",
      logged: true,
    },
    {
      icon: <FaUser />,
      title: "Đăng nhập",
      link: "/login",
      logged: false,
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng ký",
      link: "/register",
      logged: false,
    },
  ];

  const pathName = usePathname();

  return (
    <>
      <nav className={"px-5 pt-[30px]"}>
        <ul className="flex flex-col items-start gap-[30px]">
          {menu.map((item, index) => (
            <SiderMenuItem
              key={index}
              item={item}
              isShow={
                item.logged === undefined || item.logged === isLogin
                  ? true
                  : false
              }
            />
          ))}
        </ul>
      </nav>
    </>
  );
}

"use client";

import SongTable from "@/app/components/song/SongTable";
import Title from "@/app/components/title/Title";
import { authFirebase } from "@/app/firebaseConfig";
import { getSongsWishlist } from "@/app/helpers/getSongs";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function CategorySongs() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    onAuthStateChanged(authFirebase, async (user) => {
      if (user) {
        const userId = user.uid;
        const dataFinal: ISongItem[] = await getSongsWishlist(userId);
        setData(dataFinal);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text={"Bài Hát Yêu Thích"} />
        {data && <SongTable data={data} />}
      </div>
    </>
  );
}

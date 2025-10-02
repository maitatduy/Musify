"use client";

import SongTable from "@/app/components/song/SongTable";
import Title from "@/app/components/title/Title";
import { getSongsList } from "@/app/helpers/getSongs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResultSection() {
  const searchParams = useSearchParams();
  const keywordDefault = searchParams.get("keyword") || "";
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data: any[] = await getSongsList();
      const regex = new RegExp(keywordDefault, "i");
      const dataFilter: any[] = data.filter((item: any) =>
        regex.test(item.title)
      );
      setData(dataFilter);
    };

    fetchAPI();
  }, [keywordDefault]);

  return (
    <>
      <Title text={"Kết Quả Tìm Kiếm"} />
      <SongTable data={data} />
    </>
  );
}

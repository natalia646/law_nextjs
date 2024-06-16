
"use client";
import { useEffect, useState } from "react";
import fetchCases from "@/functions/fetchCases";
import { FetchCaseType } from "@/global";
import Case from "@/components/cases/Case";
import style from "./cases.module.scss";
import NewsSceleton from "@/components/sceleton/AllNewsSceleton";

export default function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const [data, setData] = useState<FetchCaseType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCases().then((data) => {
      if (!data) {
        setData([]), setLoading(true);
      }
      setData(data), setLoading(false);
    });
  }, []);

  if (loading) {
    return <NewsSceleton />;
  }
  if (!data) {
    return [];
  }
  const correctLocal = data.find((item) => item.lang === locale);

  if (!correctLocal?.data) {
    return "Loading";
  }
  const concretCase = correctLocal?.data;

  return (
    <div className={style.container}>
      {concretCase.map((item) => (
        <Case id={item.id} title={item.title} key={item.id} img={item.img} />
      ))}
    </div>
  );
}

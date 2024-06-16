"use client";
import { useEffect, useState } from "react";
import fetchNews from "@/functions/fetchNews";
import { FetchNewsType } from "@/global";
import News from "@/components/news/News";
import style from "./newsPage.module.scss";
import NewsSceleton from "@/components/sceleton/AllNewsSceleton";

export default function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const [data, setData] = useState<FetchNewsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews().then((data) => {
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
  const concretNews = correctLocal?.data;

  return (
    <div className={style.container}>
      {concretNews.map((item) => (
        <News id={item.id} title={item.title} key={item.id} img={item.img} />
      ))}
    </div>
  );
}

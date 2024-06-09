"use client";

import { useEffect, useState } from "react";
import fetchCaseAndNews from "@/functions/fetchCasesAndNews";
import { CasesNewsFetchType } from "@/global";
import News from "@/components/news/News";
import style from './newsPage.module.scss'
import NewsSceleton from "@/components/sceleton/NewsSceleton";


export default function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const [data, setData] = useState<CasesNewsFetchType[]>([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    fetchCaseAndNews().then((data) => {
      if (!data) {
        setData([]), setLoading(true);
      }
      setData(data), setLoading(false);
    });
  }, []);

  if (loading) {
    return <NewsSceleton/>;
  }
  if (!data) {
    return [];
  }
  const newsList = data[1].News;
  const correctLocal = newsList.find((item) => item.lang === locale);

  if (!correctLocal?.data) {
    return "Loading";
  }
  const concretNews = correctLocal?.data;



  return (
    <div className={style.container}>
      {concretNews.map((item) => (
        <News id={item.id} title={item.title} key={item.id} img = {item.img}/>
      ))}
    </div>
  );
}

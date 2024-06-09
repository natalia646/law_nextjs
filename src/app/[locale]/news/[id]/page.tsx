"use client";
import Image from "next/image";
import style from "./oneNews.module.scss";
import { useEffect, useState } from "react";
import fetchCaseAndNews from "@/functions/fetchCasesAndNews";
import { CasesNewsFetchType } from "@/global";
import RecomendetNews from "@/components/news/RecomendetNews";
import NewsSceleton from "@/components/sceleton/NewsSceleton";

export default function NewsPage({
  params,
}: {
  params: { id: number; locale: string };
}) {
  const { id } = params;
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
    return <NewsSceleton />;
  }
  if (!data) {
    return [];
  }
  const newsList = data[1].News;
  const correctLocal = newsList.find((item) => item.lang === locale);

  if (!correctLocal?.data) {
    return "Loading";
  }
  const concretNews = correctLocal?.data[id];
  const { title, img, news } = concretNews;
  const randomId1 = Math.floor(Math.random() * correctLocal.data.length);
  const randomId2 = Math.floor(Math.random() * correctLocal.data.length);

  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <section className={style.wrapper}>
        <article>
          <Image
            src={img}
            alt="news"
            width={847}
            height={444}
            className={style.image}
          ></Image>
          {news.map((item, i) => (
            <span key={i} className={style.text}>
              <p className={style.bolt}>{item.bolt}</p>
              <p className={style.desc}>{item.desc}</p>
            </span>
          ))}
        </article>

        <aside className={style.aside}>
          <RecomendetNews id={randomId1} data={correctLocal.data} />
          <RecomendetNews id={randomId2} data={correctLocal.data} />
        </aside>
      </section>
    </div>
  );
}

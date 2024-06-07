"use client";
import style from "./servicePage.module.scss";
import getCorrectNumber from "@/functions/getCorrectNumberOfServices";

import { useEffect, useState } from "react";
import fetchServ from "@/functions/fetchServ";
import { ServiceFetshType } from "@/global";
import TopBlocks from "@/components/services/servicePage/TopBlocks";

export default function ServicePage({
  params,
}: {
  params: { id: number; locale: string };
}) {
  const [data, setData] = useState<ServiceFetshType[]>([]);
  const [loading, setLoading] = useState(true);
  const { locale } = params;

  useEffect(() => {
    fetchServ().then((data) => {
      if (!data) {
        setData([]), setLoading(true);
      }
      setData(data), setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Louding</p>;
  }

  const correctLocal = data.find((item) => item.lang === locale);

  if (!correctLocal?.data) {
    return "Loading";
  }

  const { id } = params;
  const { title, offer, result, receives } = correctLocal?.data[id];

  return (
    <section className={style.container}>
      <div className={style.title_wrapper}>
        <h2>{title}</h2>
        <div className={style.color}>
          <p>{getCorrectNumber({ id })}</p>
        </div>
      </div>
      <TopBlocks offer={offer}/>
    </section>
  );
}

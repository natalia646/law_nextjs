"use client";

import Service from "@/components/services/Service";
import styled from "./services.module.css";
import getServicesList from "@/functions/getServicesList";
import { useEffect, useState } from "react";
import fetchServ from "@/functions/fetchServ";
import { ServiceFetshType } from "@/global";

export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  const services = getServicesList();
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

  return (
    <>
      {correctLocal?.data ? (
        <div className={styled.links}>
          {correctLocal.data.map((item) => (
            <Service item={item} key={item.id} />
          ))}
        </div>
      ) : (
        "Louding"
      )}
    </>
  );
}

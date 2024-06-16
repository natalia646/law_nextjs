"use client";
import CaseDescription from "@/components/cases/CaseDescription";
import DescTopPart from "@/components/cases/DescTopPart";
import { useEffect, useState } from "react";
import fetchCases from "@/functions/fetchCases";
import { FetchCaseType} from "@/global";

export default function CasePage({
  params,
}: {
  params: { id: number; locale: string };
}) {
  const { id } = params;
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
    return  <DescTopPart title={''} />;
  }
  if (!data) {
    return {};
  }

  const correctLocal = data.find((item) => item.lang === locale);

  if (!correctLocal?.data) {
    return "Loading";
  }
  const concretCase = correctLocal?.data[id];
  const { title } = concretCase;

  return (
    <article>
      <DescTopPart title={title} />
      <CaseDescription concretCase={concretCase} />
    </article>
  );
}

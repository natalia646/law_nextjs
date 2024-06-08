"use client";
import CaseDescription from "@/components/cases/CaseDescription";
import DescTopPart from "@/components/cases/DescTopPart";
import { useEffect, useState } from "react";
import fetchCaseAndNews from "@/functions/fetchCasesAndNews";
import { CasesNewsFetchType} from "@/global";

export default function CasePage({
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
    return <p>Louding</p>;
  }
  if (!data[0]) {
    return {};
  }
  const caseList = data[0].Cases;
  const correctLocal = caseList.find((item) => item.lang === locale);

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

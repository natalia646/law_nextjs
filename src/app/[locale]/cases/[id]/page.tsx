import React from "react";
import getCasesList from "@/functions/getCasesList";
import style from "./case.module.scss";
import Image from "next/image";

export default function CasePage({ params }: { params: { id: number } }) {
  const cases = getCasesList();
  const { id, title, client, task, decision, result, summary } =
    cases[params.id];
  return (
    <div className={style.container}>
      <p>{title}</p>
      <div className={style.image_block}>
        <Image
          src={`/cases/case${id}.webp`}
          alt="photo"
          width={433}
          height={540}
        ></Image>
        <p>{client}</p>
        <p>{task}</p>
      </div>
      <div className={style.result_block}>
        <p>{decision}</p>
        <p>{result}</p>
        <p>{summary}</p>
      </div>
    </div>
  );
}

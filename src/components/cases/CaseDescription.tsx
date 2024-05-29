import React from "react";
import style from "./caseDesc.module.scss";
import { useTranslations } from "next-intl";
import { CaseType } from "@/global";
import Image from "next/image";

export default function CaseDescription({ sCase }: { sCase: CaseType }) {
  const t = useTranslations("CasePage");
  const { id, client, task, decision, result, summary } = sCase;

  return (
    <>
      <div className={style.image_block}>
        <Image
          src={`/cases/case${id}.webp`}
          alt="case"
          width={433}
          height={541}
        ></Image>
        <section>
          <p className={style.h3}>{t("client")}</p>
          <p>{client}</p>
          <p className={style.h3}>{t("task")}</p>
          <p>{task}</p>
        </section>
      </div>
      <div className={style.result_block}>
        <p className={style.h3}>{t("decision")}</p>
        <p>{decision}</p>
        <p className={style.h3}>{t("result")}</p>
        <p>{result}</p>
        <p className={style.h3}>{t("summary")}</p>
        <p>{summary}</p>
      </div>
    </>
  );
}

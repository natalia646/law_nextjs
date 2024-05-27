import { Link } from "@/navigation";
import React from "react";
import { CaseType } from "@/global";
import Image from "next/image";
import style from './case.module.scss'

export default function Case({ id, cases }: { id: number; cases: CaseType[] }) {
  const { title } = cases[id];

  return (
    <Link href={`/cases/${id}`} className={style.block}>
      <Image
        src={`/cases/case${id}.webp`}
        alt="photo"
        width={212}
        height={278}
      ></Image>
      <p>{title}</p>
    </Link>
  );
}

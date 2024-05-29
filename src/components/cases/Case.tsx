import { Link } from "@/navigation";
import React from "react";
import style from "./case.module.scss";
import Image from "next/image";

export default function Case({ id, title }: { id: number; title: string }) {
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

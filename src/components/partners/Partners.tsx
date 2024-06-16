"use client";
import style from "./partners.module.scss";
import Image from "next/image";

export default function Partners() {
  const partners = [
    "kta.svg",
    "rm.svg",
    "fin-serv.svg",
    "exalty.svg",
    "gospl.svg",
  ];

  return (
    <div className={style.container}>
      {partners.map((partner, i) => (
        <Image
          src={`/icons/logo/${partner}`}
          alt="partner"
          width={94}
          height={28}
          className={style.image}
          key={i}
        ></Image>
      ))}
    </div>
  );
}

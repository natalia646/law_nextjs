import React from "react";
import { useTranslations } from "next-intl";
import style from "./contacts.module.scss";
import { Link } from "@/navigation";
import Image from "next/image";

export default function Contacts() {
  const t = useTranslations();
  return (
    <div className={style.container}>
      <h2>{t("Header.contacts")}</h2>
      <section>
        <p className={style.email}>tedalini.cy@gmail.com</p>
        <p>+357 99 964 508</p>
        <p>+357 25 108 384</p>
        <p>
          Avlidos St. 4, Mesa Geitonia,
          <br />
          4002, Limassol, Cyprus
        </p>
        <Link href={"https://www.linkedin.com/in/tedalini-llc-342775312/"}>
          <Image src= '/icons/networks/linkedin.svg' alt="linkedin" width={30} height={30}></Image>
        </Link>
      </section>
    </div>
  );
}
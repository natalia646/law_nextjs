import { Link } from "@/navigation";
import Image from "next/image";
import style from "./contacts.module.scss";

import { useTranslations } from "next-intl";
import React from "react";

export const Address = () => {
  const t = useTranslations("Header");

  return (
    <address>
      <h2>{t("contacts")}</h2>
      <p>info@tedalini.com</p>
      <a href="tel:+357 99 243 024">+357 99 243 024</a>
      <a href="tel:+357 99 964 508">+357 99 964 508</a>
      <a href="tel:+357 25 108 384">+357 25 108 384</a>
      <p>
        Avlidos St. 4, Mesa Geitonia,
        <br />
        4002, Limassol, Cyprus
      </p>
      <div className={style.addres_links}>
        <Link href={"https://www.linkedin.com/in/tedalini-llc-342775312/"}>
          <Image
            src="/icons/networks/linkedin.svg"
            alt="linkedin"
            width={30}
            height={30}></Image>
        </Link>
        <Link href={"https://t.me/tedalini"}>
          <Image
            src="/icons/networks/telegram.svg"
            alt="linkedin"
            width={30}
            height={30}></Image>
        </Link>
      </div>
    </address>
  );
};

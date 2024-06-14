import getServicesList from "@/functions/getServicesList";
import { useTranslations } from "next-intl";
import style from "./footer.module.scss";
import { Link } from "@/navigation";
import Image from "next/image";

export default function Footer() {
  const services = getServicesList();
  const t = useTranslations("Header");

  return (
    <footer className={style.container}>
      <div className={style.wrapper}>
        <section>
          <p className={style.title}>{t("contacts")}</p>
          <p className={style.email}>tedalini.cy@gmail.com</p>
          <p>+357 99 964 508</p>
          <p>+357 25 108 384</p>
          <p>
            Avlidos St. 4, Mesa Geitonia,
            <br />
            4002, Limassol, Cyprus
          </p>
          <Link href={"https://www.linkedin.com/in/tedalini-llc-342775312/"}>
            <Image
              src="/icons/networks/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            ></Image>
          </Link>
        </section>
        <section>
          <p className={style.title}>{t("services")}</p>
          <div className={style.services}>
            {services.map((item) => (
              <Link
                href={`/services/${item.id}`}
                className={style.link}
                key={item.id}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <section className={style.bottom_wrraper}>
        <Link href={`/`}>
          <Image
            src={"/icons/logo/tedalini-white.svg"}
            alt="tedalini_logo"
            width={235}
            height={32}
            quality={90}
            className={style.logo}
          ></Image>
        </Link>
        <p className={style.copiright}>
          Copyright © 2023 BRIX Templates 
        </p>
      </section>
    </footer>
  );
}

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
          <address>
            <p>tedalini.cy@gmail.com</p>
            <p>
              Avlidos St. 4, Mesa Geitonia,
              <br /> 4002, Limassol, Cyprus
            </p>
          </address>
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
          ></Image>
        </Link>
        <p className={style.copiright}>
          Copyright © 2023 BRIX Templates | All Rights Reserved | Terms and
          Conditions | Privacy Policy
        </p>
      </section>
    </footer>
  );
}

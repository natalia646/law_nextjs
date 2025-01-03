import getServicesList from "@/functions/getServicesList";
import { useTranslations } from "next-intl";
import style from "./footer.module.scss";
import { Link } from "@/navigation";
import {Address} from "../form/Address";

export default function Footer() {
  const services = getServicesList();
  const t = useTranslations("Header");

  return (
    <footer className={style.container}>
      <div className={style.wrapper}>
        <Address/>
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
        <p className={style.copiright}>
          TEDALINI CONSULTING LTD © 2024
        </p>
      </section>
    </footer>
  );
}

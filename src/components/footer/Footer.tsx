import getServicesList from "@/functions/getServicesList";
import { useTranslations } from "next-intl";
import style from "./footer.module.scss";
import { Link } from "@/navigation";

export default function Footer() {
  const services = getServicesList();
  const t = useTranslations("Header");

  return (
    <footer className={style.container}>
      <div className={style.wrapper}>
        <address>
          <p className={style.title}>{t("contacts")}</p>
          <p>tedalini.cy@gmail.com</p>
          <p>Avlidos St. 4, Mesa Geitonia, 4002, Limassol, Cyprus</p>
        </address>
        <section>
          <p className={style.title}>{t("services")}</p>
          <div className={style.services}>
            {services.map((item) => (
              <Link href={`/services/${item.id}`} className={style.link} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}

import { useTranslations } from "next-intl";
import ContactButton from "../contactButton/ContactButton";
import styled from "./partServicesForHome.module.scss";
import styleLink from "../services/service.module.scss";
import { Link } from "@/navigation";
import ServiceScreen from "./matchMediaFunction";

export default function PartServicesForHome() {
  const t = useTranslations("HomePage.OurServices");

  return (
    <article className={styled.container}>
      <section className={styled.wrapper}>
        <div className={styled.text}>
          <h2>{t("title")}</h2>
          <p className={styled.h6}>{t("text")}</p>
          <section className={styled.button}>
            <ContactButton />
          </section>
        </div>
        <ServiceScreen />
        <Link href={`/services`} className={styleLink.block}>
          <div className={styleLink.arrow}></div>
          <p className={styled.link}>{t("all-services")}</p>
        </Link>
      </section>
    </article>
  );
}

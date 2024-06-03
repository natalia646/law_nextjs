import { useTranslations } from "next-intl";
import getServicesList from "@/functions/getServicesList";
import Service from "@/components/services/Service";
import ContactButton from "../contactButton/ContactButton";
import styled from "./partServicesForHome.module.scss";
import { Link } from "@/navigation";

export default function PartServicesForHome() {
  const t = useTranslations("HomePage.OurServices");
  const [s1, s2, s3, s4, s5] = getServicesList();

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
        {[s1, s2, s3, s4, s5].map((item) => (
          <Service item={item} key={item.id} />
        ))}
        <Link href={`/services`} className={styled.block}>
          <div className={styled.arrow}></div>
          <p className={styled.link}>{t("all-services")}</p>
        </Link>
      </section>
    </article>
  );
}

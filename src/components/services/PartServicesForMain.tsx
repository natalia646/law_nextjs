import { useTranslations } from "next-intl";
import getServicesList from "@/functions/getServicesList";
import Service from "@/components/services/Service";
import ContactButton from "../contactButton/ContactButton";
import LinkToAllServices from "./LinkToAllServices";
import styled from "./partServices.module.scss";

export default function PartServicesForMain() {
  const t = useTranslations("HomePage");
  const [s1, s2, s3, s4, s5] = getServicesList();

  return (
    <article className={styled.container}>
      <section className={styled.wrapper}>
        <div className={styled.text}>
          <h2>{t("OurServices.title")}</h2>
          <h6>{t("OurServices.text")}</h6>
          <ContactButton />
        </div>
        {[s1, s2, s3, s4, s5].map((item) => (
          <Service item={item} key={item.id} />
        ))}
        <LinkToAllServices />
        <section className={styled.last_block}></section>
      </section>
    </article>
  );
}

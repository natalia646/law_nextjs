import { useTranslations } from "next-intl";
import TeamPage from "../team/page";
import { Link } from "@/navigation";
import style from "./aboutPage.module.scss";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <>
      <article className={style.container}>
        <section className={style.text}>
          <h2>{t("title")}</h2>
          <h6>{t("desc1")}</h6>
          <h6>{t("desc2")}</h6>
        </section>
        <section className={style.image}>
          <span></span>
        </section>
      </article>

      <TeamPage />
      <Link href={`/team`}>{t("all-team")}</Link>
    </>
  );
}

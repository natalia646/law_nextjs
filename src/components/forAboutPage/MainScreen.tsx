import { useTranslations } from "next-intl";
import style from "./mainScreen.module.scss";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <article className={style.container}>
      <section className={style.text}>
        <h2>{t("title")}</h2>
        <p className={style.h6}>{t("desc1")}</p>
        <p className={style.h6}>{t("desc2")}</p>
      </section>
      <section className={style.fon}>
        <span className={style.image}></span>
        <span className={style.color}></span>
      </section>
    </article>
  );
}

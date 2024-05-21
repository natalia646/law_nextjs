import ContactButton from "../contactButton/ContactButton";
import style from "./mainScreen.module.scss";
import { useTranslations } from "next-intl";

export default function MainScreen() {
  const t = useTranslations("HomePage.MainScreen");

  return (
    <article className={style.acticle}>
      <section className={style.text}>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </section>
      <section className={style.image}>
      </section>
      <section>
        d
        {/* <ContactButton /> */}
      </section>
    </article>
  );
}

import ContactButton from "../contactButton/ContactButton";
import style from "./mainScreen.module.scss";
import { useTranslations } from "next-intl";

export default function MainScreen() {
  const t = useTranslations("HomePage.MainScreen");

  return (
    <article className={style.container}>
      <section className={style.text}>
        <h1>{t("title")}</h1>
        <p className={style.h6}>{t("description")}</p>
        <p className={style.h5}>{t("descBlue")}</p>
      </section>
      <section className={style.fon}>
        <span className={style.color}></span>
        <span className={style.image}></span>
      </section>
      <section className={style.button}>
        <ContactButton />
      </section>
    </article>
  );
}

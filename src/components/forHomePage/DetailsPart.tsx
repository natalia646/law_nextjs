import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import style from "./detailsPart.module.scss";

export default function DetailsPart() {
  const t = useTranslations("HomePage.DetailsPart");
  return (
    <article className={style.container}>
      <section>
        <h2>{t("title")}</h2>
      </section>
      <section>
        <p className={style.h6}>{t("description")}</p>
        <Link href={"/about"} className={style.link}>{t("details") + ' >'}</Link>
      </section>
    </article>
  );
}

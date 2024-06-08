import { useTranslations } from "next-intl";
import style from "./thanksPage.module.scss";
import { Link } from "@/navigation";

export default function ThankPage() {
  const t = useTranslations("ThankPage");
  return (
    <div className={style.container}>
      <h1>{t("thanks")}</h1>
      <p>{t("desc1")}</p>
      <p>{t("desc2") + " tedalini.cy@gmail.com"}</p>
      <Link href={"/"} className={style.link}>{t("back") + ' >'}</Link>
    </div>
  );
}

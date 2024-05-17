import { useTranslations } from "next-intl";
import TeamPage from "../team/page";
import { Link } from "@/navigation";
// import style from "./aboutPage.module.scss";
// import Image from "next/image";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <>
      <article>
        <section>
          <h2>{t("title")}</h2>
          <p>{t("desc1")}</p>
          <p>{t("desc2")}</p>
        </section>
      </article>

      <TeamPage />
      <Link href={`/team`}>{t("all-team")}</Link>
    </>
  );
}

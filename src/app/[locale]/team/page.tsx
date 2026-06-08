import MemberOfTeam from "@/components/team/MemberOfTeam";
import getMembersList from "../../../functions/getMembersList";
import style from "./teamPage.module.scss";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function TeamPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const team = getMembersList();
  const t = useTranslations("TeamPage");
  return (
    <article className={style.container}>
      <div className={style.block}>
        <div className={style.text}>
          <h2>{t("our-team")}</h2>
          <p className={style.h6}>{t("description")}</p>
        </div>
        {team.map((item) => (
          <MemberOfTeam item={item} key={item.id} />
        ))}
      </div>
    </article>
  );
}

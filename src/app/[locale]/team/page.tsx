import MemberOfTeam from "@/components/team/MemberOfTeam";
import getMembersList from "../../../functions/getMembersList";
import style from "./teamPage.module.scss";
import { useTranslations } from "next-intl";

export default function TeamPage() {
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

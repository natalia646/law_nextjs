import MemberOfTeam from "@/components/team/MemberOfTeam";
import getMembersList from "../../../functions/getMembersList";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import style from "../../../app/[locale]/team/teamPage.module.scss";
import styleLink from './partOfTeam.module.scss'

export default function PartOfTeam() {
  const team = getMembersList();
  const t = useTranslations("TeamPage");
  return (
    <article className={style.container}>
      <div className={style.block}>
        <div className={style.text}>
          <h2>{t("our-team")}</h2>
          <p className={style.h6}>{t("description")}</p>
          <Link href={"/team"} className={styleLink.link}>
            {t("view-all") + " >"}
          </Link>
        </div>
        {team.map((item) => (
          <MemberOfTeam item={item} key={item.id} />
        ))}
      </div>
    </article>
  );
}

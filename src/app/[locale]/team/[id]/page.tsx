import getMembersList from "@/functions/getMembersList";
import Image from "next/image";
import style from "./member.module.scss";
import { useTranslations } from "next-intl";
import NetworksOfMember from "@/components/team/NetworksOfMember";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const { id } = params;
  const t = useTranslations("MemberPage");
  const { name, position, description, image, certificates } = team[id];

  return (
    <article className={style.container}>
      <section>
        <p className={style.h5}>{t("name")}</p>
        <p className={style.h6}>{name}</p>

        <p className={style.h5}>{t("position")}</p>
        <p className={style.h6}>{position}</p>

        <p className={style.h5}>{t("description")}</p>
        <p className={style.h6}>{description}</p>

        <p className={style.h5}>{t("networks")}</p>
      <NetworksOfMember item={team[id]}/>
      </section>
      <Image
        src={`/team/${image}`}
        alt={name}
        className={style.image}
        width="700"
        height="700"
      />
    </article>
  );
}

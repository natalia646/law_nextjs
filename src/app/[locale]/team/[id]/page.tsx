import getMembersList from "@/functions/getMembersList";
import Image from "next/image";
import style from "./member.module.scss";
import NetworksOfMember from "@/components/team/NetworksOfMember";
import { useTranslations } from "next-intl";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const { id } = params;
  const t = useTranslations("MemberPage");
  const { name, position, description, image, certificates } = team[id];

  return (
    <article className={style.container}>
      <section>
        <h5>{t("name")}</h5>
        <h6>{name}</h6>

        <h5>{t("position")}</h5>
        <h6>{position}</h6>

        <h5>{t("description")}</h5>
        <h6>{description}</h6>

        <h5>{t("networks")}</h5>
        <NetworksOfMember item={team[id]} />
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

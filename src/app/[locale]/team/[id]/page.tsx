import getMembersList from "@/functions/getMembersList";
import Image from "next/image";
import styled from "./member.module.css";
import NetworksOfMember from "@/components/team/networksOfMember";
import { useTranslations } from "next-intl";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const { id } = params;
  const t = useTranslations("MemberPage");
  const { name, position, description, image, certificates } = team[id];

  return (
    <div>
      <p>{t("name")}</p>
      <p>{name}</p>

      <p>{t("position")}</p>
      <p>{position}</p>

      <p>{t("description")}</p>
      <p>{description}</p>

      <p>{t("networks")}</p>
      <NetworksOfMember item={team[id]} />
      <Image
        src={`/team/${image}`}
        alt={name}
        className={styled.image}
        width="700"
        height="700"
      />
    </div>
  );
}

import style from "./memberDescription.module.scss";
import { useTranslations } from "next-intl";
import NetworksOfMember from "./NetworksOfMember";
import { MemberType } from "@/global";

export default function MemberDescription({ member }: { member: MemberType }) {
  const t = useTranslations("MemberPage");

  const { name, position, description } = member;
  return (
    <section>
      <p className={style.h5}>{t("name")}</p>
      <p className={style.h6}>{name}</p>

      <p className={style.h5}>{t("position")}</p>
      <p className={style.h6}>{position}</p>

      <p className={style.h5}>{t("description")}</p>
      <p className={style.h6}>{description}</p>

      <p className={style.h5}>{t("networks")}</p>
      <NetworksOfMember item={member} />
    </section>
  );
}

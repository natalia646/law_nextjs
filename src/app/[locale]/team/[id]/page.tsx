import getMembersList from "@/functions/getMembersList";
import Image from "next/image";
import style from "./member.module.scss";
import { useTranslations } from "next-intl";
import NetworksOfMember from "@/components/team/NetworksOfMember";
import Certificates from "@/components/certificates/Certificates";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const { id } = params;
  const t = useTranslations("MemberPage");
  const tr = useTranslations("TeamPage");
  const { name, position, description, image, certificates } = team[id];

  return (
    <section className={style.container}>
      <article className={style.wrapper}>
        <section>
          <h2>{tr("our-team")}</h2>
          <p className={style.h5}>{t("name")}</p>
          <p className={style.h6}>{name}</p>

          <p className={style.h5}>{t("position")}</p>
          <p className={style.h6}>{position}</p>

          <p className={style.h5}>{t("description")}</p>
          <p className={style.h6}>{description}</p>

          <p className={style.h5}>{t("networks")}</p>
          <NetworksOfMember item={team[id]} />
        </section>
        <div className={style.images_wrapper}>
          <Image
            src={"/icons/gray-backgr.svg"}
            alt="fon"
            width={219}
            height={80}
          />
          <Image
            src={`/team/${image}`}
            alt={name}
            className={style.image}
            width="700"
            height="700"
          />
        </div>

        <h2>{t("certificates")}</h2>
      </article>

      <div className={style.certificates}>
        <Certificates certificates={certificates} />
      </div>
    </section>
  );
}

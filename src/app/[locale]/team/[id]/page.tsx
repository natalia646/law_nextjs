import getMembersList from "@/functions/getMembersList";
import style from "./member.module.scss";
import { useTranslations } from "next-intl";
import Certificates from "@/components/certificates/Certificates";
import MemberDescription from "@/components/team/MemberDescription";

export default function MemberPage({ params }: { params: { id: number } }) {
  const team = getMembersList();
  const t = useTranslations("MemberPage");
  const { id } = params;
  const memmer = team[id];
  const { image, certificates } = memmer;

  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.title}>{t("our-team")}</h2>
        <span className={style.color}></span>
        <MemberDescription member={memmer} />
        <section
          style={{
            backgroundImage: `url(/team/${image})`,
          }}
          className={style.photo}
        ></section>
        <h2>{t("certificates")}</h2>
      </div >

      <div className={style.certificates}>
        <Certificates certificates={certificates} />
      </div>
    </section>
  );
}

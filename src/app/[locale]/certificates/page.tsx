import Certificates from "@/components/certificates/Certificates";
import getMembersList from "@/functions/getMembersList";
import style from "./certificates.module.css";
import { useTranslations } from "next-intl";

export default function CertificatesPage() {
  const team = getMembersList();
  const t = useTranslations();
  return (
    <section className={style.container}>
      <h2>{t("CertificatesPage")}</h2>
      <div className={style.certificates}>
        {team.map((member) => (
          <Certificates certificates={member.certificates} key={member.id} />
        ))}
      </div>
    </section>
  );
}

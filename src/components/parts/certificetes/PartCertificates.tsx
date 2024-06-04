import { Link } from "@/navigation";
import style from "./partCertificates.module.scss";
import Certificates from "@/components/certificates/Certificates";
import { useTranslations } from "next-intl";

export default function PartCertificates() {
    const t = useTranslations("CertificatesPage")
  const certificates = [
    "azarova_2.webp",
    "oleshko_3.webp",
    "linetsky_4.webp",
    "azarova_4.webp",
  ];

  return (
    <section className={style.container}>
      <h2>{t("certificates")}</h2>
      <div className={style.wrapper}>
        <Certificates certificates={certificates} />
      </div>
      <Link href={"/certificates"} className={style.link}>{t("link") + ' >'}</Link>
    </section>
  );
}

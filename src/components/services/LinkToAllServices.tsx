import styled from "./service.module.scss";
import styleLink from "./linkToAllServ.module.scss";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Service() {
  const t = useTranslations("HomePage.OurServices");

  return (
    <Link href={`/services`} className={styled.block}>
      <div className={styled.arrow}></div>
      <h5 className={styleLink.link}>{t("all-services")}</h5>
    </Link>
  );
}

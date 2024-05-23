import styled from "./service.module.scss";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Service() {
  const t = useTranslations("HomePage.OurServices");

  return (
    <Link href={`/services`} className={styled.block}>
      <Image
        src={"/icons/blue-arrow.svg"}
        alt="arrow"
        width={60}
        height={20}
      ></Image>
      <h6>{t("all-services")}</h6>
    </Link>
  );
}

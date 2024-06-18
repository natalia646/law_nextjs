import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import style from "./descTopPart.module.scss";
import Image from "next/image";
import CaseSceleton from "../sceleton/CaseSceleton";

export default function DescTopPart({ title }: { title: string }) {

  const t = useTranslations("CasePage");

  return (
    <section className={style.container}>
      <div>
        {title? <h2>{title}</h2> : <CaseSceleton/>}
        <p>{t("desc1")}</p>
        <p>{t("desc2")}</p>
        <Link href="/cases" className={style.link}>
          {t("all-cases") + " >"}
        </Link>
      </div>
      <Image
        src={"/images/case-fon.webp"}
        alt="fon"
        width={455}
        height={611}
      ></Image>
    </section>
  );
}

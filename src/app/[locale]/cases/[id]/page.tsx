import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import CaseDescription from "@/components/cases/CaseDescription";
import getCasesList from "@/functions/getCasesList";
import style from "./case.module.scss";

export default function CasePage({ params }: { params: { id: number } }) {
  const cases = getCasesList();
  const sCase = cases[params.id];
  const t = useTranslations("CasePage");

  return (
    <article className={style.container}>
      <section>
        <div>
          <h2>{sCase.title}</h2>
          <p>{t("desc1")}</p>
          <p>{t("desc2")}</p>
          <Link href="/cases" className={style.link}>
            {t("all-cases") + ' >'}
          </Link>
        </div>
        <Image
          src={"/cases/main-fon.webp"}
          alt="fon"
          width={455}
          height={611}
        ></Image>
      </section>
      <CaseDescription sCase={sCase} />
    </article>
  );
}

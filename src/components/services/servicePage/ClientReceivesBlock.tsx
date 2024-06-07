import style from "./clientReceiveBlock.module.scss";
import { useTranslations } from "next-intl";

export default function ClientReceivesBlock({
  receives,
}: {
  receives: string[];
}) {
  const t = useTranslations("ServicePage");
  if (!receives) {
    return <></>;
  }

  return (
    <>
      <h2>{t("receives")}</h2>
      <section className={style.container}>
        {receives.map((item, i) => (
          <div className={style.block} key={i}>
            <p className={style.number}>{i + 1}</p>
            <p>{item}</p>
          </div>
        ))}
      </section>
    </>
  );
}

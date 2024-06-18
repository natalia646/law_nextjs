import { ServiceOfferType } from "@/global";
import style from "./result.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ResultBlock({
  result,
}: {
  result: ServiceOfferType[];
}) {
  const t = useTranslations("ServicePage");
  if (result.length === 0) {
    return <></>;
  }
  return (
    <>
      <h2 style={{marginTop: '5rem'}}>{t("result")}</h2>
      <section className={style.container}>
        <Image
          src={"/icons/servise-page.svg"}
          alt="image"
          width={429}
          height={368}
        ></Image>
        <div className={style.wrapper}>
          {result.map((item, i) => (
            <div className={style.block} key={i}>
              <p className={style.bolt}>{item.bolt}</p>
              {Array.isArray(item.desc) ? (
                item.desc.map((val, i) => <p key={i}>{"- " + val}</p>)
              ) : (
                <p>{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

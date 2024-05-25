import { useMessages } from "next-intl";
import { BloksType } from "@/global";
import Image from "next/image";
import style from "./bloks.module.scss";

export default function Bloks() {
  const messages = useMessages();

  if (!Array.isArray(messages.Bloks)) {
    return [];
  }
  const bloks: BloksType[] = messages.Bloks;
  const icons = [
    "/icons/bloks/jurisprudence.svg",
    "/icons/bloks/contracts.svg",
    "/icons/bloks/support.svg",
    "/icons/bloks/consulting.svg",
  ];
  return (
    <article className={style.container}>
      {bloks.map((item, i) => (
        <section className={style.block} key={i}>
          <Image
            key={i}
            src={icons[i]}
            alt="icon"
            width={64}
            height={64}
            className={style.icon}
          ></Image>
          <h4>{item.title}</h4>
          <h6>{item.description}</h6>
        </section>
      ))}
    </article>
  );
}

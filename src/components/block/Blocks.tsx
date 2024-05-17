import { useMessages } from "next-intl";
import { BlocksType } from "@/global";
import Image from "next/image";
import style from "./blocks.module.scss";

export default function Blocks() {
  const messeges = useMessages();
  if (!Array.isArray(messeges.Blocks)) {
    return [];
  }
  const blocksList: BlocksType[] = messeges.Blocks;
  const icons = [
    "/icons/blocks/jurisprudence.svg",
    "/icons/blocks/contracts.svg",
    "/icons/blocks/support.svg",
    "/icons/blocks/consulting.svg",
  ];
  return (
    <div className={style.container}>
      {blocksList.map((block, i) => (
        <div className={style.wrapper}>
          <Image
            src={`${icons[i]}`}
            alt="icon"
            width={64}
            height={64}
            className={style.image}
          ></Image>
          <div className={style.text}>
            <p className={style.title}>{block.title}</p>
            <p className={style.desc}>{block.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

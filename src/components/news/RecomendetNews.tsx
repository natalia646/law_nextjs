import { NewsType } from "@/global";
import Image from "next/image";
import style from "./recomendetNews.module.scss";
import { Link } from "@/navigation";

export default function RecomendetNews({
  id,
  data,
}: {
  id: number;
  data: NewsType[];
}) {
  const randomNews = data[id];

  return (
    <Link href={`/news/${id}`} className={style.link}>
      <div className={style.container}>
        <Image src={randomNews.img} alt="news" width={256} height={240}></Image>
        <p>{randomNews.title}</p>
      </div>
    </Link>
  );
}

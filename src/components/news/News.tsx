import { Link } from "@/navigation";
import style from '../cases/case.module.scss';
import Image from "next/image";

export default function News({ id, title,img }: { id: number; title: string , img: string}) {
  return (
    <Link href={`/news/${id}`} className={style.block}>
      <span className={style.wrapper}>
        <Image
          src={img}
          alt="photo"
          width={212}
          height={278}
          className={style.image}
        ></Image>
      </span>
      <p className={style.h4}>{title}</p>
    </Link>
  );
}
import { Link } from "@/navigation";
import { MemberType } from "../../global";
import Image from "next/image";

import style from "./memberOfTeam.module.scss";

interface Props {
  item: MemberType;
}

export default function MemberOfTeam({ item }: Props) {
  const { id, name, position, image, networks } = item;

  return (
    <div className={style.card}>
      <div className={style.image_block}>
        <Link href={`/team/${id}`}>
          <section
            className={style.section}
            style={{
              backgroundImage: `url(/team/${image})`,
              backgroundSize: "cover",
              width: "100%",
              maxWidth: "305px",
              minHeight: "297px",
              height: "100%",
            }}
          ></section>
        </Link>
      </div>
   <div className={style.p}>
        <p>{name}</p>
        <p>{position}</p>
        <div>
          {networks.map((val) => (
            <Link href={val.link}>
              <Image src={`/icons/networks/${val.icon}.svg`} alt="netvork" width={30} height={30}></Image>
            </Link>
          ))}
        </div>
   </div>
    </div>
  );
}

import { Link } from "@/navigation";
import { MemberType } from "../../global";

import style from "./memberOfTeam.module.scss";
// import NetworksOfMember from "./NetworksOfMember";

interface Props {
  item: MemberType;
}

export default function MemberOfTeam({ item }: Props) {
  const { id, name, position, image} = item;

  return (
    <div className={style.card}>
      <div className={style.image_block}>
        <Link href={`/team/${id}`} aria-label="Read more about member of team">
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
      <div className={style.text}>
        <h4>{name}</h4>
        <p className={style.position}>{position}</p>
        {/* <NetworksOfMember item={item} /> */}
      </div>
    </div>
  );
}
